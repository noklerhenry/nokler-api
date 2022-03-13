const express = require('express')
const router = express.Router();

const {
    getProductByGame
} = require('../controllers/getProductByGame.controller.js')


router.get('/', getProductByGame)


module.exports = router;