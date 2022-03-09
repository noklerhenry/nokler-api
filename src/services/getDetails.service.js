const axios = require('axios');

const API_KEY = process.env.API_KEY


const getGameDetails = async (id) => {
    const gameDetailById = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    
    const gameData = gameDetailById.data
    const gameDetail = {
        id: gameData.id,
        name: gameData.name,    
        released: gameData.released,
        rating: gameData.rating,
        img: gameData.background_image,
        description: gameData.description_raw,
        genres: gameData.genres.map(genre => genre.name),
        platform: gameData.platforms?.map(plat => plat.platform.name),
        stores: gameData.stores?.map(st => st.store.name)    
    }
    return gameDetail
}

const getGameScreenshots = async (id) => {
    const gameScreenshots = await axios.get(`https://api.rawg.io/api/games/${id}/screenshots?key=${API_KEY}`)
    
    const gameData = gameScreenshots.data
    const screenshotsUrl = {
        screenshots: gameData.results.map(screens => screens.image)
    }
    return screenshotsUrl
}

module.exports = {
    getGameDetails,
    getGameScreenshots
};
