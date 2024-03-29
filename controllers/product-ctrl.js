const Product = require("../models/Product");

// GET /api/products
exports.getProducts = async (req, res, next) => {
	try {
		const products = await Product.find();
		res.status(200).json(products);
	} catch (err) {
		res.status(500).json({ message: err.message });
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
		images,
		mainImage,
		discount,
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
			images,
			mainImage,
			discount,
			category,
			countInStock,
			length,
			breadth,
			height,
		});
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
		images,
		mainImage,
		discount,
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
				images,
				mainImage,
				discount,
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

//PATCH /api/products/mainImage/:id

exports.updateMainImage = async (req, res, next) => {
	try {
		const productId = req.params.id;
		const mainImage = req.body.mainImage;
		const product = await Product.findByIdAndUpdate(
			productId,
			{
				mainImage,
			},
			{ new: true }
		);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: "Something went wrong" });
	}
};
