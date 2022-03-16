const express = require('express')
const router = express.Router();

const {
    storeList
} = require('../../controllers/Games/getStores.controller.js')


router.get('/', storeList)


module.exports = router;