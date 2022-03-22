const express = require("express");
const router = express.Router();

const {getUserByEmail} = require("../../controllers/Users/getUserByEmail.controller.js")


router.get("/",getUserByEmail)


module.exports = router;