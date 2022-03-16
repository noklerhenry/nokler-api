const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const filterByGenre = async (req, res) => {
  const { genr } = req.query;

  try {
    if (genr) {
      const products = await prisma.productsKey.findMany({
        include: {
          key: true,
          game: {
            include: {
              genres: true,
            },
          },
          platform: true,
          store: true,
        },
      });
// console.log(products)

      let filteredProducts = [...products]

        for (let i = 0; i < products.length; i++) {
            let arrayGenre = products[i].game.genres
            for (let j = 0; j < arrayGenre.length; j++) {
                
                if (arrayGenre[j].name === genr) {
                  filteredProducts.push(products[i].game);
                }
    
            }
        }
      

      res.status(200).json(filteredProducts);
    }
  } catch (error) {
    console.log(error);
  }
};

const filterGenre = (array, query) => {
  if (typeof query === "string") {
    array = array.filter((g) => g.game.genres[0].name.includes(query));
    return array;
  }
};

module.exports = {
  filterByGenre,filterGenre
};
