const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


const gameSearchDB = async (req, res) => {
    const name = req.query.name    
    try {
        if(name){
            const getDBGames = await prisma.Game.findMany({
                where: {
                    name: {
                        contains: name,
                        mode: 'insensitive'  
                    }
                },
                include: {
                    genres: true,
                    platforms: true,
                    productKey: true,
                    screenshots: true
                }
                })
            if(getDBGames.length >= 1) {
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
                        productKey: data.productKey?.map(pkey => pkey.key),
                        screenshots: data.screenshots?.map(screenshot => screenshot.url)             
                        }
                    }                  
                )
                console.log('database games')
                res.status(200).json(formatDBGames)    
            } else {
                res.json('Game not found')
            }
        } else {
            res.status(200).json('Nothing to search')    
        }

    } catch (error) {
        console.log('Game not found')
        res.status(500).json(error.message)
    }
}

module.exports = {
    gameSearchDB
};