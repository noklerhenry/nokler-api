const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const newKeys = async (product, key) => {
    try {
        if(product && key) {
            const keys = key.map(k => {
                return {
                    value:k,
                    productId: Number(product.id), 
                    
                }
            })    
        
            const createKeys = await prisma.key.createMany({
                data:keys,

                        
            }) 

            

            console.log(key)
        
            return createKeys
        }
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = {
    newKeys
};
