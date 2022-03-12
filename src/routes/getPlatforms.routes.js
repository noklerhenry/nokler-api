const express = require('express')
const router = express.Router();

const {
    platformList
} = require('../controllers/getPlatforms.controller.js')


router.get('/', platformList)


module.exports = router;