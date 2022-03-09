const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const checkOut= async (req, res) => {

    const { amount, id } = req.body;
  
    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        payment_method: id,
        confirm: true,
      });
  
      console.log(payment);
  
      res.send(payment);
    } catch (error) {
      console.log(error);
      res.json({message: error});
    }
  };

  module.exports = {
    checkOut,
  };