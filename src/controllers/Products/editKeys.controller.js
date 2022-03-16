const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const editKeys = async (req, res) => {
    const { keyId } = req.query
    const { newValue } = req.body
    try {
        const keyToEdit = await prisma.key.findUnique({
            where: { 
                id: Number(keyId) 
            }
        })

        if(keyToEdit){
            const editKeyById = await prisma.key.update({
                where: {
                    id: Number(keyId) 
                },
                data:{
                    value: newValue 
                }
            })
            res.status(200).send(editKeyById)
        }

    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)        
    }
}

module.exports = {
    editKeys
};
