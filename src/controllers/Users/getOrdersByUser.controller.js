const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getOrdersByUser = async (req, res) => {
  const {userId} = req.params
  console.log(userId)
  try {
    const orders = await prisma.order.findMany({

      where: {userId: Number(userId)}
    });

    console.log(orders)

    res.status(200).json(orders)

  } catch (error) {
    console.log(error);
  }
};

module.exports = {getOrdersByUser}