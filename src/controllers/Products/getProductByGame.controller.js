const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getProductByGame = async (req, res) => {
  let { game } = req.query;
  try {
      
    if (game && !Array.isArray(game)) {
      const productId = await prisma.productsKey.findMany({
        include: {
          key: true,
          game: {
            include: {
              genres: true,
              screenshots: true,
            },
          },
          platform: true,
          store: true,
        },
        where: {
          game: {
            name: {
                contains: game,
                mode: 'insensitive'  
            }
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