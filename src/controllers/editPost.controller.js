const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


const editPost = async (req, res) => {
    const { id } = req.params
    const { updateValue } = req.body

    try {
        const post = await prisma.game.update({
            where: { id: id },
            data: {
              name: updateValue,
            },
          })
         
        console.log('Update succes!')
        res.status(200).json(post)        
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)        
    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        console.log(productId)
    
        const deletePost = await prisma.game.delete({
            where: {
                id: id
            },
        })
        console.log('Product deleted!')
        res.status(200).json(deletePost)
    
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    editPost,
    deletePost
};
