const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const { checkOut } = require("../controllers/checkOut.controller.js");

const router = express();

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY,
);

router.use(cors({ origin: "http://localhost:3000" }));

router.post("/", checkOut);


module.exports = router;