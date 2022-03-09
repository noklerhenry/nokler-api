const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const { checkOut } = require("../controllers/checkOut.controller.js");

const router = express();

const stripe = new Stripe(
  "sk_test_51KZSeoFbNejxpP0on5jicw5JshREByqXE33i6mzAUMQq2VaLvaMk6OdAWqgEnygbtN71JZwMpdhuZLsUPamCQXPw009celed5X"
);

router.use(cors({ origin: "http://localhost:3000" }));

module.exports = router;

router.post("/", checkOut);
