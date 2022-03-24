const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const refundPetition = async (req, res) => {
  const { email, name, lastName, charge, about } = req.body;

  try {
    const petition = await prisma.refund.create({
      data: {
        userName: `${name} ${lastName}`,
        userEmail: email,
        charge,
        about,
        user: { connect: { email } },
      },
    });

    res.status(200).json(petition);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { refundPetition };
