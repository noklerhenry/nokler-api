const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const filterByStore = async (req, res) => {
  const { stor } = req.query;
  try {
    if (stor) {
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
        where: {
          store: {
            name: stor,
          },
        },
      });
      console.log(products);
      res.status(200).json(products);
    }
  } catch (error) {
    console.log(error);
  }
};

const filterStore = (array, query) => {
  if (typeof query === "string") {
    array = array.filter((g) => g.store.name.includes(query));
    return array;
  }
};

module.exports = {
  filterByStore,filterStore
};
