const {
  paginationService,
  createProduct,
} = require("../../services/products.services");
const {
  newKeys
} = require('../../services/postKeys.service')

const postProduct = async (req, res) => {
  try {
    // const { product } = req.body;
    const newProduct = await createProduct({
      ...req.body,
    });
    const { key } = req.body
    const newKey = await newKeys(newProduct,key) 
    console.log("controller");
    console.log(newProduct, newKey);
    res.status(201).json({
      message: "Product created",
      newProduct,
      newKey
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error creating product",
      error: error.message,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const { cursor } = req.query;
    const { products, nextId } = await paginationService(cursor);
    res.status(200).json({
      products,
      nextId,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  postProduct,
  getProducts,
};
