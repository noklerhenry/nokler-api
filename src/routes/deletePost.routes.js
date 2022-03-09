const express = require('express')
const router = express.Router();

const {
    deletePost
} = require('../controllers/deletePost.controller')


router.delete('/:id', deletePost)


module.exports = router;