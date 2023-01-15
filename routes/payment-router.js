const express = require("express");
const router = express.Router();
const { checkout } = require("../controllers/payment-ctrl");

router.post("/checkout", checkout);

module.exports = router;
