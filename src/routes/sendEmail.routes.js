const express = require('express')
const router = express.Router();

const {
    sendEmail
} = require('../controllers/sendEmail.controller.js')


router.post('/', sendEmail)


module.exports = router;