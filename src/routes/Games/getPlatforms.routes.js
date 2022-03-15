const express = require('express')
const router = express.Router();

const {
    platformList
} = require('../controllers/Games/getPlatforms.controller.js')


router.get('/', platformList)


module.exports = router;