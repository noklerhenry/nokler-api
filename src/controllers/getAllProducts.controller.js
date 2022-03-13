const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


const getAllProducts = async (req, res) => {
    try {
        const getAll= await prisma.ProductsKey.findMany({
            include: {
                game: {
                    include: {
                        screenshots: true,
                        genres: true
                    }
                },
                platform: true,
                store: true
            }
        })
        console.log(getAll)
        res.status(200).json(getAll)
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)        

    }
}


module.exports = {
    getAllProducts
};
