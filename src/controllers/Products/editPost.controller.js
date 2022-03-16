const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const editPost = async (req, res) => {
  const { id } = req.params;
  const { updateValues } = req.body;

    try {
        const productToEdit = await prisma.productsKey.findUnique({
            where: { 
                id: Number(id) 
            }
        })
        if(productToEdit) {
            const productEdited = await prisma.productsKey.update({
                where: { id: Number(id) },
                data: {
                    price: updateValues.price === '' ?  productToEdit.price : Number(updateValues.price) ,
                    region: updateValues.region === '' ?  productToEdit.region : updateValues.region ,
                    storeId: updateValues.storeId === '' ? productToEdit.storeId : Number(updateValues.storeId) ,
                    platformId: updateValues.platformId === '' ? productToEdit.platformId : Number(updateValues.platformId)
                }
            })             
            console.log('Update succes!')
            res.status(200).json(productEdited)        
        } else {
            console.log("Invalid ID product")
            res.status(403).send("The product ID is incorrect, enter a valid ID.")
        }
    
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

module.exports = {
    editPost
};


// {
//     "updateValues": {
//         "price":"179",
//         "region":"",
//         "storeId":"",
//         "platformId":""
//     }
// }
