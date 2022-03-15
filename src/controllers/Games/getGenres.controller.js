const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const axios = require("axios");
const API_KEY = process.env.API_KEY;


const genreList = async (req, res) => {

  const apiGenresData = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  //console.log(apiGenresData)
  const preLoadDb = apiGenresData.data.results?.map((genre) => {
    return {
      name: genre.name,
    };

  });

  res.json(preLoadDb);
};

module.exports = {
  genreList,
};
