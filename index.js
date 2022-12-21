const db = require("./db/index");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const chalk = require("chalk");
const productRouter = require("./routes/product-router");
const orderRouter = require("./routes/order-router");
db();
dotenv.config();
const app = express();
app.use(
    bodyParser.json({
        limit: "30mb",
        extended: true,
    })
);
app.use(
    bodyParser.urlencoded({
        limit: "30mb",
        extended: true,
    })
);

app.use(express.json());
const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
    res.send("Status Ok!");
});

app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.listen(port, () => {
    console.log(chalk.blue(`Server is running on port ${port}`));
});
