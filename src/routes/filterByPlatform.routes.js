const express = require('express')
const router = express.Router();

const {
    filterByPlatform
} = require('../controllers/filterByPlatform.controller.js')


router.get('/', filterByPlatform)


module.exports = router;