const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const filterByPlatform = async (req, res) => {
    const {plat} = req.query
    console.log(plat)
    try {
        if(plat){
            const platFilter = await prisma.productsKey.findMany({
                include: {
                     platform: true,
                    game:true,
                  },
                where: {
                    platform: {
                      name: plat,
                    },
                  },
              });
              res.status(200).json(platFilter)
        }
    } catch (error) {
        console.log(error)
    }
}

const filterPlatform = (array, query) => {
  if (typeof query === "string") {
    array = array.filter((g) => g.platform.name.includes(query));
    return array;
  }
};

module.exports = {
    filterByPlatform, filterPlatform
  };