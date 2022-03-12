const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


const deletePost = async (req, res) => {
    const { id } = req.params
    try {
        const productToDelete = await prisma.productsKey.findUnique({
            where: { 
                id: Number(id) 
            }
        })

        if(productToDelete) {
            const deletePost = await prisma.productsKey.delete({
                where: {
                    id: Number(id)
                },
            })
            console.log('Product deleted!')
            res.status(200).json(deletePost)
        } else {
            console.log("Invalid ID product")
            res.send("The product ID is incorrect, enter a valid ID.")
        }     
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)        
    }
}


module.exports = {
    deletePost
};
