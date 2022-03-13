const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getProductByGame = async (req, res) => {
  let { game } = req.query;
  try {
      
    if (game && !Array.isArray(game)) {
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
          game: {
            name: game,
          },
        },
      });

      console.log(productId);
      res.status(200).json(productId);
    } else res.status(404).json("Product not found");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProductByGame };
