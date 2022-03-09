const express = require('express')
const router = express.Router();

const {
    filterByRegion
} = require('../controllers/filterByRegion.controller.js')


router.get('/', filterByRegion)


module.exports = router;