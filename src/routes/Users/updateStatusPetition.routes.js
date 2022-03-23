const express = require("express");
const router = express.Router();

const {updateStatusPetition} = require("../../controllers/Users/updateStatusPetition.controller.js")


router.put("/:idPetition",updateStatusPetition)



module.exports = router;