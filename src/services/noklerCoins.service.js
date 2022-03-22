const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const percentage = 10;

const noklerCoins = async (payment, data) => {
  if (payment.status === "succeeded") {
    if (payment.amount / 100 >= data.price) {
      let coins = payment.amount / 100 / percentage;
      const buyer = await prisma.user.findUnique({
        where: {
          id: Number(data.userId),
        },
      });

      if (buyer) {
        console.log("User noklerCoins pre-order: ", buyer.noklerCoins);
        const addNoklerCoins = await prisma.user.update({
          where: {
            id: Number(data.userId),
          },
          data: {
            noklerCoins: buyer.noklerCoins + coins,
          },
        });
        console.log(
          "User noklerCoins post-order: ",
          addNoklerCoins.noklerCoins
        );
      }
    }
  }
};

module.exports = {
  noklerCoins,
};
