const db = require("./db/index");
const express = require("express");
const dotenv = require("dotenv");
const chalk = require("chalk");
const productRouter = require("./routes/product-router");
db();
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
    res.send("Status Ok!");
});

app.use("/api/products", productRouter);
app.listen(port, () => {
    console.log(chalk.blue(`Server is running on port ${port}`));
});
