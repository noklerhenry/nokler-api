const express = require('express')
const router = express.Router();

const {
    editPost,
    deletePost
} = require('../controllers/editPost.controller')


router.put('/:id', editPost)

router.delete('/:id', deletePost)


module.exports = router;