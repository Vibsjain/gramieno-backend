const Razorpay = require("razorpay");

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.checkout = async (req, res) => {
    try {
        const options = {
            amount: req.body.amount * 100,
            currency: "INR",
            receipt: "receipt_order_74394",
            payment_capture: 1,
        };
        const response = await instance.orders.create(options);
        res.json({
            message: response,
        });
    } catch (error) {
        console.log(error);
    }
};
