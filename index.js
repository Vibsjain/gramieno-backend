const db = require("./db/index");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const chalk = require("chalk");
const Razorpay = require("razorpay");
const productRouter = require("./routes/product-router");
const orderRouter = require("./routes/order-router");
const contactRouter = require("./routes/contact-router");
const discountRouter = require("./routes/discount-router");
const paymentRouter = require("./routes/payment-router");
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
app.use(cors());
const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
    res.send("Status Ok!");
});

app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/contact", contactRouter);
app.use("/api/discounts", discountRouter);
app.use("/api/payment", paymentRouter);
app.listen(port, () => {
    console.log(chalk.blue(`Server is running on port ${port}`));
});

// module.exports = { instance };
