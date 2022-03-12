const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const axios = require("axios");
const API_KEY = process.env.API_KEY;

const storeList = async (req, res) => {
  const apiStoresData = await axios.get(
    `https://api.rawg.io/api/stores?key=${API_KEY}`
  );
  const preLoadDb = apiStoresData.data.results?.map((store) => {
    return {
      name: store.name,
    };
  });
  res.json(preLoadDb);
};

module.exports = {
    storeList,
  };