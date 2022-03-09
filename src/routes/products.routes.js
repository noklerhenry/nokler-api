const express = require("express");
const router = express.Router();
const {
  postProduct,
  getProducts,
} = require("../controllers/products.controllers");

router.post("/", postProduct);
router.get("/", getProducts);

module.exports = router;
