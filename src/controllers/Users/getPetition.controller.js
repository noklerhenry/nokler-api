const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPetition = async (req, res) => {
  const { idPedition } = req.params;
  try {
    const petition = await prisma.refund.findUnique({
      where: {
        id: Number(idPedition),
      },
    });

    res.status(200).send(petition);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = { getPetition };
