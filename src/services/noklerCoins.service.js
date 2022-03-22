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
        const addNoklerCoins = await prisma.user.update({
          where: {
            id: Number(data.userId),
          },
          data: {
            noklerCoins: buyer.noklerCoins + coins,
          },
        });
        // console.log(addNoklerCoins)
      }
    }
  }
};

module.exports = {
  noklerCoins,
};
