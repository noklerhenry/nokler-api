const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const filterAcum = async (req, res) => {
  const { genr, plat, regi } = req.query;
  // console.log(plat);
  try {
    const allDBProducts = await prisma.productsKey.findMany({
      include: {
        platform: true,
        game: true,
      },
    });

    let filtered = allDBProducts;

    const filterPlat = (array, plat) => {
      if (typeof plat === "string") {
        array = array.filter((g) => 
          g.platform.name.includes(plat)
        );
        return array;
      }
    };

    if (plat) {
      if (typeof plat === "string") {
        filtered = filterPlat(filtered, plat);
      }
      if(Array.isArray(plat)) {
        let arreglo = []
        for (let i = 0; i < plat.length; i++) {
          arreglo.push(...filterPlat(filtered,plat[i]))
          
        }
        filtered = arreglo
      }
    }

    res.json(filtered);




    //console.log(filtered)

    // if (plat && !Array.isArray(plat)) {
    //   filtered = filtered.filter((p) =>
    //     p.platform.name.toLowerCase().includes(plat.toLowerCase())
    //   );
    // } else if (Array.isArray(plat)) {
    //   filtered = filtered.filter((g) => {
    //     // plat.map((p) => {});
    //     g.platform.name.toLowerCase().includes(plat.pop().toLowerCase());
    //   });
    // }

    // if (genr) {
    //   filtered = filtered.filter((g) =>
    //     g.genres.map((g) => g.name.toLowerCase()).includes(genr.toLowerCase())
    //   );
    // }

    //   if (store) {
    //     filtered = filtered.filter((g) =>
    //       g.stores
    //         .map((s) => s.store.name.toLowerCase())
    //         .includes(store.toLowerCase())
    //     );
    //   }

    // res.json(filtered);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  filterAcum,
};

// const filter = (array, platform) => {
//   if (typeof platform === "string") {
//     array = array.filter((g) =>
//       g.platforms
//         .map((p) => p.platform.name.toLowerCase())
//         .includes(platform.toLowerCase())
//     );
//     return array;
//   }
// };

// if (platform) {
//   if (typeof platform === "string") {
//     filtered = filtered.filter((g) =>
//       g.platforms
//         .map((p) => p.platform.name.toLowerCase())
//         .includes(platform.toLowerCase())
//     );
//   }
//   // if (Array.isArray(platform)) {
//   //   while(platform.length) {
//   //     filtered = filtered.filter(g => g.platforms.map(p => p.platform.name.toLowerCase()).includes(platform.pop()))
//   //   }
//   // }
//   if (Array.isArray(platform)) {
//     let array = [];
//     for (let i = 0; i < platform.length; i++) {
//       array.push(...filter(filtered, platform[i]));
//     }
//     filtered = array;
//   }
// }
