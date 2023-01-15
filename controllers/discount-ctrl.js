const Discount = require("../models/Discount");

// Get all discounts
exports.getDiscounts = async (req, res, next) => {
    try {
        const discounts = await Discount.find();
        res.status(200).json(discounts);
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

// Get discount by category
exports.getDiscountByCategory = async (req, res, next) => {
    const category = req.params.category;
    console.log(category);
    try {
        const discount = await Discount({ category: category });
        console.log(discount);
        res.status(200).json(discount);
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

// Create discount
exports.createDiscount = async (req, res, next) => {
    const { category, discountPercent, active } = req.body;
    try {
        const discount = new Discount({
            category,
            discountPercent,
            active,
        });
        await discount.save();
        res.status(201).json({
            success: true,
            discount,
        });
    } catch (err) {
        res.status(500).json({ message: err.message, success: false });
    }
};

// Update discount Percent By Category
exports.updateDiscountPercentByCategory = async (req, res, next) => {
    const category = req.params.category;
    const { discountPercent } = req.body;
    try {
        const discount = await Discount.findOneAndUpdate(
            {
                category,
            },
            {
                discountPercent,
            },
            {
                new: true,
            }
        );
        res.status(200).json({
            success: true,
            discount,
        });
    } catch (err) {
        res.status(500).json({ message: err.message, success: false });
    }
};

// Toggle discount Active Status by Category
exports.toggleDiscountActiveStatusByCategory = async (req, res, next) => {
    const category = req.params.category;
    try {
        const discount = await Discount.find({ category: category });
        const status = discount[0].active;
        console.log(discount);
        await Discount.findOneAndUpdate(
            { category },
            { active: !status },
            { new: true }
        );
        res.status(200).json({
            success: true,
            discount,
        });
    } catch (err) {
        res.status(500).json({ message: err.message, success: false });
    }
};
