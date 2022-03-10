const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const orderByPrice= async (req, res) => {
const {acs,des} = req.query
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

    let sortProduct = allDBProducts

if(asc){
    
}

} catch (error) {
    console.log(error);
  }
};

module.exports = {
    orderByPrice,
};