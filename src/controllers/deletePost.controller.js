const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


const deletePost = async (req, res) => {
    const { id } = req.params
    try {
        if(id) {
            const deletePost = await prisma.game.delete({
                where: {
                    id: id
                },
            })
            console.log('Product deleted!')
            res.status(200).json(deletePost)
        }     
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)        
    }
}


module.exports = {
    deletePost
};
