const {
  paginationService,
  createProduct,
} = require("../../services/products.services");

const postProduct = async (req, res) => {
  try {
    // const { product } = req.body;
    const newProduct = await createProduct({
      ...req.body,
    });
    console.log("controller");
    console.log(newProduct);
    res.status(201).json({
      message: "Product created",
      newProduct,
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
