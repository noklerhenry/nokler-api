const express = require('express')
const router = express.Router();
const cors = require("cors");

const {
    getAllGames
} = require('../../controllers/Games/getAllGames.controller.js')

router.use(cors({ origin: process.env.CORS_URL.toString() }));


router.get('/', getAllGames)


module.exports = router;