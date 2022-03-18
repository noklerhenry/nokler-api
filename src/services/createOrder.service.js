const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createOrder = async (data, payment, userId) => {
  try {
    if (payment.status === "succeeded") {
      const keys = data.map((g) => g.key);
      const games = data.map((g) => g.name);

      //   console.log(games)

      keys.forEach((k) => k.toString());

      // console.log(keys.toString().split(","))

      for (let game of data) {
        const order = await prisma.order.create({
          data: {
            status: true,
            userId: userId,
            key: game.key,
            game: game.name,
            price: game.price,
            store: game.store,
            region: game.region,
            platform: game.platform,
          },
        });
        console.log(order);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createOrder };
