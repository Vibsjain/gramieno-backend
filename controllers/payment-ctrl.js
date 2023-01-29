const Razorpay = require("razorpay");
const crypto = require("crypto");

const instance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY_ID,
	key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.getKey = async (req, res) => {
	res.json({
		key: process.env.RAZORPAY_KEY_ID,
	});
};

exports.checkout = async (req, res) => {
	const { totalPrice } = req.body;
	try {
		const options = {
			amount: totalPrice * 100,
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

exports.paymentVerification = async (req, res) => {
	console.log(req.body);
	const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
		req.body;
	const body = razorpay_order_id + "|" + razorpay_payment_id;
	var expectedSignature = crypto
		.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
		.update(body.toString())
		.digest("hex");

	console.log("sig received", razorpay_signature);
	console.log("sig generated", expectedSignature);
	if (expectedSignature === razorpay_signature) {
		res.redirect(
			`https://gramieno-frontend.netlify.app/payment-success?reference=${razorpay_payment_id}`
		);
	} else {
		res.status(400).json({ signatureIsValid: "false" });
	}
};
