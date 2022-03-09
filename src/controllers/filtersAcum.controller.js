const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const filterAcum = async (req, res) => {
  const { genr, plat, regi } = req.query;
  //console.log(plat);
  try {
    const allDBProducts = await prisma.productsKey.findMany({
      include: {
        platform: true,
        game: true,
      },
    });

    let filtered = allDBProducts;
    //console.log(filtered)

    if (plat && !Array.isArray(plat)) {
      filtered = filtered.filter((p) =>
        p.platform.name.toLowerCase().includes(plat.toLowerCase())
      );
    } else if (Array.isArray(plat)) {
      filtered = filtered.filter((g) => {
        plat.map((p) => {
          g.platform.name.toLowerCase().includes(p.toLowerCase());
        });
      });
    }

    if (genr) {
      filtered = filtered.filter((g) =>
        g.genres.map((g) => g.name.toLowerCase()).includes(genr.toLowerCase())
      );
    }

    //   if (store) {
    //     filtered = filtered.filter((g) =>
    //       g.stores
    //         .map((s) => s.store.name.toLowerCase())
    //         .includes(store.toLowerCase())
    //     );
    //   }

    res.json(filtered);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  filterAcum,
};
