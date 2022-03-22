const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const { checkOut } = require("../controllers/checkOut.controller.js");
const {
  checkOutRefund,
} = require("../controllers/checkoutRefund.controller.js");

const router = express();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.use(cors({ origin: process.env.CORS_URL }));

router.post("/", checkOut);
router.post("/refund", checkOutRefund);

module.exports = router;
