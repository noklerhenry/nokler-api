const express = require('express')
const router = express.Router();

const {
    storeList
} = require('../controllers/getStores.controller.js')


router.get('/', storeList)


module.exports = router;