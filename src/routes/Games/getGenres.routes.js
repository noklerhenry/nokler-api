const express = require('express')
const router = express.Router();

const {
    genreList
} = require('../../controllers/Games/getGenres.controller.js')


router.get('/', genreList)


module.exports = router;