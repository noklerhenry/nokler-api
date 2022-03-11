const express = require('express')
const router = express.Router();

const {
    gameSearchDB
} = require('../controllers/gameSearchDB.controller.js')


router.get('/', gameSearchDB)


module.exports = router;