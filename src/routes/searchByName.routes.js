const express = require('express')
const router = express.Router();

const {
    searchGamesController
} = require('../controllers/searchByName.controller.js')


router.get('/', searchGamesController)


module.exports = router;