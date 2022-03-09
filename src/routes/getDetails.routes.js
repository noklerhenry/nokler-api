const express = require('express')
const router = express.Router();

const {
    getDetails
} = require('../controllers/getDetails.controller')


router.get('/:id', getDetails)


module.exports = router;