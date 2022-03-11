const express = require('express')
const router = express.Router();

const {
    SearchByGenre
} = require('../controllers/searchByGenre.controller.js')


router.get('/', SearchByGenre)


module.exports = router;