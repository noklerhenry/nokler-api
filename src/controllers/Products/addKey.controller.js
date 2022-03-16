const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addKey = async (req, res) => {
    const { productId } = req.query
    const { newKey } = req.body

    try {
        const addNewKey = await prisma.key.create({
            data:{
                value: newKey,
                productId: Number(productId)
            }
        })
        res.status(200).send(addNewKey)
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)        
        
    }
}

module.exports = {
    addKey
};
