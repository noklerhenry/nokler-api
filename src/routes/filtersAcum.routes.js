const express = require('express')
const router = express.Router();

const {
    filterAcum
} = require('../controllers/filtersAcum.controller.js')


router.get('/', filterAcum)


module.exports = router;