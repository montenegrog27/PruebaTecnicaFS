const express = require("express");
const router = express.Router();
const getProducts = require("../controllers/productsController");
const createProduct = require("../controllers/productsController");
const updateProduct = require("../controllers/productsController");
const deleteProduct = require("../controllers/productsController");

router.get("/getProducts", getProducts.getProducts);
router.post("/createProduct", createProduct.createProduct);
router.put("/updateProduct/:id", updateProduct.updateProduct);
router.put("/deleteProduct/:id", deleteProduct.deleteProduct);

module.exports = router;
