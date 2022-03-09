const express = require('express')
const router = express.Router();

const {
    filterByGenre
} = require('../controllers/filterByGenre.controller.js')


router.get('/', filterByGenre)


module.exports = router;