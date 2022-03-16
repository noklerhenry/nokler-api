const express = require('express')
const router = express.Router();

const {
    addKey
} = require('../../controllers/Products/addKey.controller')


router.post('/', addKey)


module.exports = router;