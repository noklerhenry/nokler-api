const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
const {deleteKeys} = require("../../services/deleteKey.service")

const deletePost = async (req, res) => {
    const { productId } = req.params
    try {
        const productToDelete = await prisma.productsKey.findUnique({
            
            where: { 
                id: Number(productId)
            },
            include: { key:true}
        })




        if(productToDelete) {

            await deleteKeys(productToDelete.key.map((k)=> k.id))
            const deletePost = await prisma.productsKey.delete({
                where: {
                    id:  Number(productId)
                }
            })

            console.log('Product deleted!')
            res.status(200).json(deletePost)
        } 
        else {
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
