const express = require('express')
const router = express.Router();

const {
    userSearchController
} = require('../controllers/userSearch.controller.js')


router.get('/', userSearchController)


module.exports = router;