const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createOrder = async (data, payment, buyerEmail) => {
  console.log(data);
  try {
    const buyer = await prisma.user.findUnique({
      where: {
        email: buyerEmail,
      },
    });

    if (payment.status === "succeeded") {
      const order = await prisma.order.create({
        data: {
          status: true,
          userId: buyer.id,
          key: data.key,
          game: data.name,
          price: data.price,
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
