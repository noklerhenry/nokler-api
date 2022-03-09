const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
let genrArray = [];

const filterByGenre = async (req, res) => {
  const { genr } = req.query;
  if (!genrArray.includes(genr)) {
    genrArray.push(genr);
  }
  //  console.log(genrArray);
  try {
    if (genrArray.length >= 1) {
      const genreFilter = await prisma.game.findMany({
        include: {
          genres: true,
          platforms: true,
          productKey: true,
          region: true,
        },
      });
      const formatDBGames = genreFilter.map((data) => {
        return {
          id: data.id,
          name: data.name,
          released: data.released_at?.toISOString().split("T")[0],
          img: data.image,
          trailer: data.trailer,
          description: data.description,
          genres: data.genres.map((genre) => genre.name),
          platform: data.platforms?.map((plat) => plat.name),
          productKey: data.productKey?.map((pkey) => pkey.key),
        };
      });
      //   console.log(formatDBGames);
let filteredGames = []

      for (let i = 0; i < genrArray.length; i++) {
        let ele = genrArray[i];
        // console.log(ele)
        for (let j = 0; j < formatDBGames.length; j++) {
          if (formatDBGames[j].genres.includes(ele)) {
            filteredGames.push(formatDBGames[j]);
          }
        }
      }
      res.json(filteredGames);
    } else {
      res.json("Games not found");
    }

  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};


module.exports = {
  filterByGenre,
};
