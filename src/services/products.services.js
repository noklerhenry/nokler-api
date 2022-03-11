const { PrismaClient } = require("@prisma/client");
const { getGameDetails, getGameScreenshots } = require("./getDetails.service");

const prisma = new PrismaClient();

const createProduct = async (product) => {
  try {
    const { price, key, store, game, userId, platform, region } = product;

    const gameSearch = await prisma.game.findUnique({
      where: {
        name: game.name,
      },
    });

    if (!gameSearch) {
      console.log("game not found");
      const newGame = await prisma.game.create({
        data: {
          name: game.name,
          released_at: new Date(game.released),
          rating: game.rating,
          description: game.description,
          trailer: game.trailer,
          image: game.img,
          genres: {
            connect: game.genres.map((genre) => ({
              name: genre,
            })),
          },
          platforms: {
            connect: game.platform.map((platform) => ({
              name: platform,
            })),
          },
          screenshots: {
            create: game.screenshots.map((screenshot) => {
              return {
                url: screenshot,
              };
            }),
          },
        },
      });

      const newProduct = await prisma.productsKey.create({
        data: {
          price: Number(price),
          key,
          store: {
            connect: {
              name: store,
            },
          },
          game: {
            connect: {
              id: newGame.id,
            },
          },
          user: {
            connect: {
              id: userId,
            },
          },
          platform: {
            connect: {
              name: platform,
            },
          },
          region,
        },
      });
      return newProduct;
    } else {
      console.log("game already exists");
      const newProduct = await prisma.productsKey.create({
        data: {
          price: Number(price),
          key,
          store: {
            connect: {
              name: store,
            },
          },
          game: {
            connect: {
              id: gameSearch.id,
            },
          },
          user: {
            connect: {
              id: userId,
            },
          },
          platform: {
            connect: {
              name: platform,
            },
          },
          region,
        },
      });
      return newProduct;
    }
  } catch (error) {
    throw error;
  }
};

const paginationService = async (idCursor) => {
  try {
    const limit = 9;
    const cursor = idCursor ?? "";
    const cursorObj = idCursor === "" ? undefined : { id: Number(idCursor) };

    const products = await prisma.productsKey.findMany({
      include: {
        store: true,
        platform: true,
        game: {
          include: {
            genres: true,
          },
        },
      },
      take: limit,
      skip: idCursor !== "" ? 1 : 0,
      cursor: cursorObj,
      orderBy: {
        id: "asc",
      },
    });

    return {
      products,
      nextId:
        products.length === limit
          ? products[products.length - 1].id
          : undefined,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = { paginationService, createProduct };
