const express = require("express");
const router = express.Router();

const {
  getPetition,
} = require("../../controllers/Users/getPetition.controller");

router.get("/:idPedition", getPetition);

module.exports = router;
