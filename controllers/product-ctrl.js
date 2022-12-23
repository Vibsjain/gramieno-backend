const Product = require("../models/Product");

// GET /api/products
exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

// GET /api/products/:id
exports.getProduct = async (req, res, next) => {
    const productId = req.params.id;
    try {
        const product = await Product.find({ _id: productId });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

// POST /api/products
exports.createProduct = async (req, res, next) => {
    const {
        name,
        price,
        description,
        image1,
        image2,
        image3,
        image4,
        category,
        countInStock,
        length,
        breadth,
        height,
    } = req.body;
    try {
        const product = new Product({
            name,
            price,
            description,
            image1,
            image2,
            image3,
            image4,
            category,
            countInStock,
            length,
            breadth,
            height,
        });
        console.log(product);
        await product.save();
        res.status(201).json({
            success: true,
            product,
        });
    } catch (err) {
        res.status(500).json({ message: err.message, success: false });
    }
};

// PUT /api/products/:id
exports.updateProduct = async (req, res, next) => {
    const productId = req.params.id;
    const {
        name,
        price,
        description,
        image1,
        image2,
        image3,
        image4,
        category,
        countInStock,
        length,
        breadth,
        height,
    } = req.body;
    try {
        const product = await Product.findByIdAndUpdate(
            productId,
            {
                name,
                price,
                description,
                image1,
                image2,
                image3,
                image4,
                category,
                countInStock,
                length,
                breadth,
                height,
            },
            { new: true }
        );
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

// DELETE /api/products/:id
exports.deleteProduct = async (req, res, next) => {
    const productId = req.params.id;
    try {
        await Product.findByIdAndDelete(productId);
        res.status(200).json({ message: "Product deleted" });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
