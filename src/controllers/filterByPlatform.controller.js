const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
let platArray = [];

const filterByPlatform = async (req, res) => {
  const { plat } = req.query;
  if (!platArray.includes(plat)) {
    platArray.push(plat);
  }
//   console.log(platArray);
  try {
    if (platArray.length >= 1) {
      const platformFilter = await prisma.game.findMany({
        include: {
          genres: true,
          platforms: true,
          productKey: true,
          region: true,
        },
      });
      const formatDBGames = platformFilter.map((data) => {
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

      for (let i = 0; i < platArray.length; i++) {
        let ele = platArray[i];
        // console.log(ele)
        for (let j = 0; j < formatDBGames.length; j++) {
          if (formatDBGames[j].platform.includes(ele)) {
            filteredGames.push(formatDBGames[j]);
          }
        }

        // const filteredGames = formatDBGames.filter((f) =>
        //   f.platform.includes()
        // );
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
  filterByPlatform,
};
