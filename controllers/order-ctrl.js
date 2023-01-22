const Order = require("../models/Order");

// GET /api/orders
exports.getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

// GET /api/orders/:id
exports.getOrder = async (req, res, next) => {
    const orderId = req.params.id;
    console.log(orderId);
    try {
        const order = await Order.find({ _id: orderId });
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST /api/orders
exports.createOrder = async (req, res, next) => {
    const {
        orderItems,
        shippingAddress,
        orderDate,
        totalPrice,
        isDelivered,
        deliveredAt,
    } = req.body;
    try {
        const order = new Order({
            orderItems,
            shippingAddress,
            orderDate,
            totalPrice,
            isDelivered,
            deliveredAt,
        });
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

// PUT /api/orders/:id
exports.updateOrder = async (req, res, next) => {
    const orderId = req.params.id;
    const {
        orderItems,
        shippingAddress,
        orderDate,
        totalPrice,
        isDelivered,
        deliveredAt,
    } = req.body;
    console.log(orderId, req.body);
    try {
        const order = await Order.findByIdAndUpdate(
            orderId,
            {
                orderItems,
                shippingAddress,
                orderDate,
                totalPrice,
                isDelivered,
                deliveredAt,
            },
            { new: true }
        );
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

// DELETE /api/orders/:id
exports.deleteOrder = async (req, res, next) => {
    const orderId = req.params.id;
    try {
        await Order.deleteOne({ _id: orderId });
        res.status(200).json({ message: "Order deleted" });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

//Change Delivery Status to true
exports.changeOrderStatus = async (req, res, next) => {
    const orderId = req.params.id;
    try {
        const order = await Order.findByIdAndUpdate(
            orderId,
            {
                isDelivered: true,
                deliveredAt: Date.now(),
            },
            { new: true }
        );
        
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
