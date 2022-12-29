const express = require("express");
const router = express.Router();

const {
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,
    changeOrderStatus,
} = require("../controllers/order-ctrl");

router.get("/", getOrders);
router.get("/:id", getOrder);
router.post("/", createOrder);
router.put("/:id", updateOrder);
router.put("/status/:id", changeOrderStatus);
router.delete("/:id", deleteOrder);

module.exports = router;
