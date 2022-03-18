const express = require("express");
const router = express.Router();

const {getOrders} = require("../../controllers/Users/getOrders.controller.js")
const {getOrdersByUser} = require("../../controllers/Users/getOrdersByUser.controller.js")


router.get("/",getOrders)
router.get("/userId/:userId",getOrdersByUser)

module.exports = router;