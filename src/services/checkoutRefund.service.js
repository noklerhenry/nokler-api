const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Stripe = require("stripe");
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(STRIPE_SECRET_KEY);

const checkOutRefund = async (charge) => {
  try {
    const refund = await stripe.refunds.create({
      charge,
    });
    return refund;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { checkOutRefund };
