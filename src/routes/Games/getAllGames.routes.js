const express = require('express')
const router = express.Router();
const cors = require("cors");

const {
    getAllGames
} = require('../controllers/Games/getAllGames.controller.js')

router.use(cors({ origin: "http://localhost:3000" }));


router.get('/', getAllGames)


module.exports = router;