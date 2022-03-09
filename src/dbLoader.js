const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const axios = require('axios');
const API_KEY = process.env.API_KEY;


const genreDB = async () =>{
    const dbVerification = await prisma.Genre.findMany();
    if (dbVerification.length < 1) {
      const apiGenresData = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
      const preLoadDb = apiGenresData.data.results?.map((genre) => {
        return {
          name: genre.name
        } 
      }) 
      for (const g of preLoadDb) {
        await prisma.Genre.create({ data: g })
      }
    }
};

const platformsDB = async () => {
    const dbVerification = await prisma.platform.findMany();
    if (dbVerification.length < 1) {
        const apiPlatformsData = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
        const preLoadDb = apiPlatformsData.data.results?.map((platform) => {
          return {
            name: platform.name
          } 
        })
        for (const p of preLoadDb) {
          await prisma.platform.create({ data: p })
        }
      }
  }


const storesDB = async () => {
    const dbVerification = await prisma.store.findMany();
    if (dbVerification.length < 1) {
        const apiStoresData = await axios.get(`https://api.rawg.io/api/stores?key=${API_KEY}`)
        const preLoadDb = apiStoresData.data.results?.map((store) => {
          return {
            name: store.name,
          } 
        })
        // console.log(preLoadDb)
        for (const s of preLoadDb) {
          await prisma.store.create( { data: s } )
        }
      }
}


module.exports = {
    genreDB,
    platformsDB,
    storesDB
}
