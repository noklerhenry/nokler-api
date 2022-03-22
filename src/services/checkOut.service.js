const Stripe = require("stripe");

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

const stripe = new Stripe(STRIPE_SECRET_KEY);

const checkOutService = async (amount, id) => {
  const payment = await stripe.paymentIntents.create({
    amount,
    currency: "USD",
    payment_method: id,
    confirm: true,
  });

  return payment;
};

module.exports = {
  checkOutService,
};
