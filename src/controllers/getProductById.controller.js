const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getProductById = async (req, res) => {
    let {ids} = req.query
    ids = parseInt(ids)
    try {
        if(ids){
            const productId = await prisma.productsKey.findMany({
              include: {
                game: {
                  include: {
                    genres: true,
                  },
                },
                platform: true,
                store: true,
              },
                where: {
                    id: ids
                  },
              });

              console.log(productId)
              res.status(200).json(productId)
            }
            else res.status(404).json("Product not found")
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getProductById };