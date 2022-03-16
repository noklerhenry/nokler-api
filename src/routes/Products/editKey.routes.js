const express = require('express')
const router = express.Router();

const {
    editKeys
} = require('../../controllers/Products/editKeys.controller')


router.put('/', editKeys)


module.exports = router;