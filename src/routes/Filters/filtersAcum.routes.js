const express = require('express')
const router = express.Router();

const {
    filterAcum
} = require('../../controllers/Filters/filtersAcum.controller.js')


router.get('/', filterAcum)


module.exports = router;