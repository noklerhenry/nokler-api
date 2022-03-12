const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const filterByRegion = async (req, res) => {
    const {regi} = req.query
    try {
        if(regi){
            const regionFilter = await prisma.productsKey.findMany({
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
                    region: {
                      equals: regi,
                    },
                  },
              });
              res.status(200).json(regionFilter)
        }
    } catch (error) {
        console.log(error)
    }
}

const filterRegion = (array, query) => {
  if (typeof query === "string") {
    array = array.filter((g) => g.region.includes(query));
    return array;
  }
};

module.exports = {
    filterByRegion,filterRegion
  };