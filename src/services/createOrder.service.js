const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createOrder = async (data, payment) => {
  try {
    if (payment.status === "succeeded") {
      const order = await prisma.order.create({
        data: {
          status: true,
          userId: data.userId,
          key: data.key,
          game: data.name,
          price: payment.amount / 100,
          store: data.store,
          region: data.region,
          platform: data.platform,
        },
      });
      console.log(order);
      return order;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createOrder };
