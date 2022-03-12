const express = require("express");
const router = express();



const { 
    getAllProducts
 } = require('../controllers/getAllProducts.controller');


 
 router.get('/', getAllProducts)

module.exports = router;