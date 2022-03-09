const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const filterByRegion = async (req, res) => {
    const {regi} = req.query
    try {
        if(regi){
            const regionFilter = await prisma.productsKey.findMany({
                include: {
                    platform: true,
                    game:true,
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

module.exports = {
    filterByRegion,
  };