const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const newKeys = async (product, key) => {
    
    const createKeys = key.map(k => {
        return {
            value:k,
            productId: Number(product.id)  
        }
    })    

    const newKeys = await prisma.key.createMany({
        data:createKeys,        
    }) 

    console.log(newKeys)
    return newKeys
}

module.exports = {
    newKeys
};
