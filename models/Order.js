const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderItems: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        },
    ],
    shippingAddress: {
        fullName: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
    },
    orderDate: { type: Date, default: Date.now },
    totalPrice: { type: Number },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
