const express = require("express");
const router = express.Router();

const {refundPetition} = require("../../controllers/Users/refundPetition.controller.js")


router.post("/",refundPetition)


module.exports = router;