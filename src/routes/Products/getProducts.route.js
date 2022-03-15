const express = require("express");
const router = express();



const { 
    getAllProducts
 } = require('../controllers/Products/getAllProducts.controller');


 
 router.get('/', getAllProducts)

module.exports = router;