const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { filterPlatform } = require("./filterByPlatform.controller.js");
const { filterRegion } = require("./filterByRegion.controller.js");
const { filterStore } = require("./filterByStore.controller.js");
const { filterGenre } = require("./filterByGenre.controller.js");

const filterAcum = async (req, res) => {
  const { genr, plat, regi, stor } = req.query;
  //console.log(regi);

  try {
    const allDBProducts = await prisma.productsKey.findMany({
      include: {
        key: true,
        game: {
          include: {
            genres: true,
            screenshots: true,
          },
        },
        platform: true,
        store: true,
      },
    });

    let filtered = allDBProducts;
    // console.log(filtered)

    if (plat) {
      if (typeof plat === "string") {
        filtered = filterPlatform(filtered, plat);
      }
      if (Array.isArray(plat)) {
        let arreglo = [];
        for (let i = 0; i < plat.length; i++) {
          arreglo.push(...filterPlatform(filtered, plat[i]));
        }
        filtered = arreglo;
      }
    }

    if (regi) {
      if (typeof regi === "string") {
        filtered = filterRegion(filtered, regi);
      }
      if (Array.isArray(regi)) {
        let arreglo = [];
        for (let i = 0; i < regi.length; i++) {
          arreglo.push(...filterRegion(filtered, regi[i]));
        }
        filtered = arreglo;
      }
    }

    if (stor) {
      if (typeof stor === "string") {
        filtered = filterStore(filtered, stor);
      }
      if (Array.isArray(stor)) {
        let arreglo = [];
        for (let i = 0; i < stor.length; i++) {
          arreglo.push(...filterStore(filtered, stor[i]));
        }
        filtered = arreglo;
      }
    }

    if (genr) {
      if (typeof genr === "string") {
        filtered = filterGenre(filtered, genr);
      }
      if (Array.isArray(genr)) {
        let arreglo = [];
        for (let i = 0; i < genr.length; i++) {
          arreglo.push(...filterGenre(filtered, genr[i]));
        }
        filtered = arreglo;
      }
    }

    res.json(filtered);

    // res.json(filtered);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  filterAcum,
};
