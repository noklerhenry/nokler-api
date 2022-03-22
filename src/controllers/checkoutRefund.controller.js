const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Stripe = require("stripe");

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

const stripe = new Stripe(STRIPE_SECRET_KEY);

const checkOutRefund = async (req, res) => {
  const { charge } = req.body;
  try {
    const refund = await stripe.refunds.create({
      charge,
    });
    res.status(200).json(refund);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { checkOutRefund };
