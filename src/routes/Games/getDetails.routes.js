const express = require('express')
const router = express.Router();

const {
    getDetails
} = require('../controllers/Games/getDetails.controller')


router.get('/:id', getDetails)


module.exports = router;