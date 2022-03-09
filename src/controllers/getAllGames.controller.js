const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


const getAllGames = async (req, res) => {
    try {
        const getDBGames = await prisma.game.findMany({
            include: {
                genres: true,
                platforms: true,
                productKey: true,
            }
        })       
        if(getDBGames.length < 1) {
            console.log('Games not found')      
            res.status(200).json('Games not found')
        } else {
            const formatDBGames = getDBGames.map(data => {
                return {
                id: data.id,
                name: data.name,    
                released: data.released_at?.toISOString().split('T')[0],
                img: data.image,
                trailer: data.trailer,
                description: data.description,
                genres: data.genres.map(genre => genre.name),
                platform: data.platforms?.map(plat => plat.name),
                productKey: data.productKey?.map(pkey => pkey.key)             
                }
            }                  
        )
        console.log('database games')
        res.status(200).json(formatDBGames)    
        }       
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)        
    }
}

module.exports = {
    getAllGames
};
