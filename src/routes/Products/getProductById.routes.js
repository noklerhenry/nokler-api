const express = require('express')
const router = express.Router();

const {
    getProductById
} = require('../../controllers/Products/getProductById.controller.js')


router.get('/', getProductById)


module.exports = router;