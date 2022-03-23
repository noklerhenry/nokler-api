const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUserByEmail = async (req, res) => {
  const { email } = req.query;
  console.log(email);
  try {
    const user = await prisma.user.findMany({
      where: {
        email: email,
      },
    });

    console.log(user);

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUserByEmail };
