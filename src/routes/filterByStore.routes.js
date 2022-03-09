const express = require('express')
const router = express.Router();

const {
    filterByStore
} = require('../controllers/filterByStore.controller.js')


router.get('/', filterByStore)


module.exports = router;