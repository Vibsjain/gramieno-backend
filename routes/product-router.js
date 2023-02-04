const express = require("express");
const router = express.Router();
const {
	getProducts,
	getProduct,
	createProduct,
	updateProduct,
	deleteProduct,
	updateMainImage,
} = require("../controllers/product-ctrl");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.put("/mainImage/:id", updateMainImage);
router.delete("/:id", deleteProduct);

module.exports = router;
