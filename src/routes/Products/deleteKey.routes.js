const express = require('express')
const router = express.Router();

const {
    deleteKey
} = require('../../controllers/Products/deleteKey.controller')


router.delete('/', deleteKey)


module.exports = router;