const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

const {
    searchApiGamesByName
} = require('../services/gameSearchApi.service')

const searchGamesController = async (req, res) => {
    const { name } = req.query    
    try {
        if(name) {
            const apiGames = await searchApiGamesByName(name)      
            console.log('api games')      
            res.json(apiGames)
        } else {
            res.json('Game not found')
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
}

module.exports = {
    searchGamesController
};