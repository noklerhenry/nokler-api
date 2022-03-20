const express = require("express");
const router = express();
const { contactFormMail } = require("../controllers/contactForm.controller");


router.post("/", contactFormMail);

module.exports = router;