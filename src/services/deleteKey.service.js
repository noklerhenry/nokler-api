const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const deleteKeys = async (keyId) => {

     for(let id of keyId){
        console.log(id)
        const keysToDeleted = await prisma.key.delete({
            where: {
                id: Number(id)
            }
        })
        console.log(keysToDeleted)
    }    
}

module.exports = {
    deleteKeys
};
