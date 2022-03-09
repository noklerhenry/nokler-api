const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const filterByStore = async (req, res) => {
    const {stor} = req.query
    try {
        if(stor){
            const storeFilter = await prisma.productsKey.findMany({
                include: {
                    platform: true,
                    game:true,
                  },
                where: {
                    store: {
                      equals: stor,
                    },
                  },
              });
              res.status(200).json(storeFilter)
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    filterByStore,
  };