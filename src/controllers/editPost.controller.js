const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


const editPost = async (req, res) => {
    const { productId } = req.params
    // const { updatePrice } = req.body

    console.log(typeof(productId))

       const update = prisma.game.update({
        where: {
            id: productId
        },
        data: {
            name: "3"
        }
    })
    console.log('Update succes!')
    res.status(200).json(update)
}

// const deletePost = async (req, res) => {
//     try {
//         const { productId } = req.params
//         console.log(productId)
    
//         const deletePost = await prisma.game.delete({
//             where: {
//                 id: productId
//             },
//         })
//         console.log('Product deleted!')
//         res.status(200).json(deletePost)
    
//     } catch (error) {
//         console.log(error)
//     }
// }


module.exports = {
    editPost,
    // deletePost
};
