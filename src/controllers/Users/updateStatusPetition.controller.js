const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { checkOutRefund } = require("../../services/checkoutRefund.service");
const { refundEmail } = require("../../services/sendEmail.service");

const updateStatusPetition = async (req, res) => {
  const status = req.query.status;
  const idPetition = req.params.idPetition;

  try {
    const petition = await prisma.refund.update({
      where: {
        id: Number(idPetition),
      },

      data: {
        status,
      },
    });

    if (petition.status === "FINISHED") {
      checkOutRefund(petition.charge);
    }

    else if (petition.status === "CANCEL") {
      const data = {
        email: petition.email,
        message: "Your petition was denied",
      };
      refundEmail(data);
    }

    res.status(200).json(petition);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateStatusPetition };
