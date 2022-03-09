const express = require('express')
const router = express.Router();

const {
    getAllGames
} = require('../controllers/getAllGames.controller.js')


router.get('/', getAllGames)


module.exports = router;