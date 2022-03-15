const express = require('express')
const router = express.Router();

const {
    searchGamesController
} = require('../../controllers/Games/gameSearchApi.controller.js')


router.get('/', searchGamesController)


module.exports = router;