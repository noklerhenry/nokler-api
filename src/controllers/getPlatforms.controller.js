const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const axios = require("axios");
const API_KEY = process.env.API_KEY;

const platformList = async (req, res) => {
  const apiPlatformsData = await axios.get(
    `https://api.rawg.io/api/platforms?key=${API_KEY}`
  );
  const preLoadDb = apiPlatformsData.data.results?.map((platform) => {
    return {
      name: platform.name,
    };
  });
  res.json(preLoadDb);
};

module.exports = {
  platformList,
};
