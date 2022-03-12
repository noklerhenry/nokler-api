const axios = require('axios');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const KEY = `?key=${process.env.RAWG_API_KEY}`;

const baseUrl = 'https://api.rawg.io/api/';

const genresData = async () => {
  try {
    const data = await axios
      .get(`${baseUrl}genres${KEY}`)
      .then((res) => res.data.results);
    return data.map((genre) => {
      return {
        name: genre.name,
      };
    });
  } catch (error) {
    throw error;
  }
};

const storesData = async () => {
  try {
    const data = await axios
      .get(`${baseUrl}stores${KEY}`)
      .then((res) => res.data.results);
    return data.map((genre) => {
      return {
        name: genre.name,
      };
    });
  } catch (error) {
    throw error;
  }
};

const platformsData = async () => {
  try {
    const data = await axios
      .get(`${baseUrl}platforms${KEY}`)
      .then((res) => res.data.results);
    return data.map((genre) => {
      return {
        name: genre.name,
      };
    });
  } catch (error) {
    throw error;
  }
};

const main = async () => {
  try {
    const genres = await genresData();
    const stores = await storesData();
    const platforms = await platformsData();

    await prisma.genre.createMany({ data: genres, skipDuplicates: true });
    await prisma.store.createMany({ data: stores, skipDuplicates: true });
    await prisma.platform.createMany({ data: platforms, skipDuplicates: true });
    // await prisma.game.create({
    //   data: {
    //     name: 'test',
    //     genres: { connect: [{ name: 'Indie' }, { name: 'RPG' }] }
    //   },
    // });
    // await prisma.game.create({
    //   data: {
    //     name: "The Witcher 3: Wild Hunt",
    //     genres: { connect: [{ id: 116 }, { id: 117 }] }
    //   },
    // });
  } catch (error) {
    throw error;
  }
};

module.exports = main;
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
