const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const { checkOut } = require("../controllers/checkOut.controller.js");

const router = express();

const stripe = new Stripe(
  "sk_test_51KbQVvKlOgZYCviaM26mtACmLWGQDttlg2ZxMGKJonC3OfVNKYzxWXbeMilMKjCsk48S7yLrQayzk7DG5ZORFWBS00UQUWQ6TU"
);

router.use(cors({ origin: "http://localhost:3000" }));

module.exports = router;

router.post("/", checkOut);
