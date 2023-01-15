const express = require("express");
const router = express.Router();
const {
    getDiscounts,
    getDiscountByCategory,
    createDiscount,
    updateDiscountPercentByCategory,
    toggleDiscountActiveStatusByCategory,
} = require("../controllers/discount-ctrl");

router.get("/", getDiscounts);
router.get("/:category", getDiscountByCategory);
router.post("/", createDiscount);
router.put("/:category", updateDiscountPercentByCategory);
router.put("/toggle/:category", toggleDiscountActiveStatusByCategory);

module.exports = router;
