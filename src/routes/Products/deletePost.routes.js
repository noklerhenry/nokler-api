const express = require('express')
const router = express.Router();

const {
    deletePost
} = require('../../controllers/Products/deletePost.controller')


router.delete('/:productId', deletePost)


module.exports = router;