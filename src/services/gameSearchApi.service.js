const axios = require('axios');

const API_KEY = process.env.API_KEY



const searchApiGamesByName =  async (searchName) => {
    try {
        let date = new Date();
        let dateNow = date.toISOString().split('T')[0];

        if(searchName) {
            const apiGames =  await axios.get(`https://api.rawg.io/api/games?dates=2010-01-01,${dateNow}&search=${searchName}&key=${API_KEY}`)
            
            const apiGamesByName = apiGames.data.results.map( game => {
                return {
                    id: game.id,
                    name: game.name,
                    released: game.released,
                    rating: game.rating,
                    img: game.background_image,
                    description: game.description_raw,
                    genres: game.genres.map(genre => genre.name),
                    platforms: game.platforms.map(elem => elem.platform.name)
                }
            })        
            return apiGamesByName
        }
        else {
            return ('Not games found')
        }
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    searchApiGamesByName,
};