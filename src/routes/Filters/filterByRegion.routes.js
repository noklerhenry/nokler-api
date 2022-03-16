const express = require('express')
const router = express.Router();

const {
    filterByRegion
} = require('../../controllers/Filters/filterByRegion.controller.js')


router.get('/', filterByRegion)


module.exports = router;