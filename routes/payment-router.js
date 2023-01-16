const express = require("express");
const router = express.Router();
const {
    checkout,
    getKey,
    paymentVerification,
} = require("../controllers/payment-ctrl");

router.get("/key", getKey);
router.post("/checkout", checkout);
router.post("/verification", paymentVerification);

module.exports = router;
