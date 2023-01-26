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
    discount : {
        type: Number,
    },
    countInStock: {
        type: Number,
        required: true,
    },
    length: {
        type: Number,
        required: true,
    },
    breadth: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
