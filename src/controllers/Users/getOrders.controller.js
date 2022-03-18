const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany();

    console.log(orders)

    res.status(200).json(orders)

  } catch (error) {
    console.log(error);
  }
};

module.exports = {getOrders}