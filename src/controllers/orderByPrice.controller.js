const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const orderByPrice= async (req, res) => {

try {
    const allDBProducts = await prisma.productsKey.findMany({
      include: {
        game: {
          include: {
            genres: true,
          },
        },
        platform: true,
        store: true,
      },
    });
} catch (error) {
    console.log(error);
  }
};

module.exports = {
    orderByPrice,
};