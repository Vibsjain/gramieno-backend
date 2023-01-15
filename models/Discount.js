const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema({
    category: {
        type: Number,
        required: true,
    },
    discountPercent: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model("Discount", discountSchema);
