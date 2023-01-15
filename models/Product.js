const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
    },
    length: {
        type: Decimal128,
        required: true,
    },
    breadth: {
        type: Decimal128,
        required: true,
    },
    height: {
        type: Decimal128,
        required: true,
    },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
