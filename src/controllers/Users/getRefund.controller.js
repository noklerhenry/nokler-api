const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getRefund = async (req, res) => {
  try {
    const orders = await prisma.refund.findMany({
        include: {
            user:{
                include: {
                    order: true 
                }
            }
        }
    });

    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getRefund };
