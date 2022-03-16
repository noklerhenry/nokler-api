const express = require('express')
const router = express.Router();

const {
    editPost
} = require('../../controllers/Products/editPost.controller')


router.put('/:id', editPost)


module.exports = router;