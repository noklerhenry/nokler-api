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


module.exports = {
    editPost
};
