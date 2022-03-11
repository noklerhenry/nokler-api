const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


const editPost = async (req, res) => {
    const { id } = req.params
    const { updateValues } = req.body

    try {
        const post = await prisma.game.update({
            where: { id: id },
            // include:{
            //     genres:true
            // },
            data: {
                name: updateValues.name,
                description: updateValues.description,
                // genres:updateValues.genres,
            },
            include: {
                platforms:updateValues.genres,

            }
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
