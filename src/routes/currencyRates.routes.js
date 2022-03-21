const express = require("express");
const { changeCurrency } = require("../controllers/currencyChange.controller");
const router = express();



router.get("/", changeCurrency);

module.exports = router;