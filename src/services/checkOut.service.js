const Stripe = require("stripe");
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(STRIPE_SECRET_KEY);

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

let payment = require("../checkoutPayment.json");

const checkOutService = async (amount, id, data, coins) => {
  coins = Number(coins);

  if (coins) {
    const buyer = await prisma.user.findUnique({
      where: {
        id: Number(data.userId),
      },
    });
    const deleteNoklerCoins = await prisma.user.update({
      where: {
        id: Number(data.userId),
      },
      data: {
        noklerCoins: buyer.noklerCoins - coins,
      },
    });
  }
  // let payment;
  switch (coins) {
    case 10:
      // payment = await stripe.paymentIntents.create({
      //   amount: amount - amount * 0.05,
      //   currency: "USD",
      //   payment_method: id,
      //   confirm: true,
      // });
      payment = {
        ...payment,
        amount: amount - amount * 0.05,
      };
      console.log(payment);
      return payment;

    case 20:
      // payment = await stripe.paymentIntents.create({
      //   amount: amount - amount * 0.1,
      //   currency: "USD",
      //   payment_method: id,
      //   confirm: true,
      // });
      payment = {
        ...payment,
        amount: amount - amount * 0.1,
      };
      console.log(payment);

      return payment;

    // case 30:
    //   payment = await stripe.paymentIntents.create({
    //     amount: amount - amount * 0.15,
    //     currency: "USD",
    //     payment_method: id,
    //     confirm: true,
    //   });
    //   return payment;

    // case 40:
    //   payment = await stripe.paymentIntents.create({
    //     amount: amount - amount * 0.2,
    //     currency: "USD",
    //     payment_method: id,
    //     confirm: true,
    //   });
    //   return payment;

    // case 50:
    //   payment = await stripe.paymentIntents.create({
    //     amount: amount - amount * 0.25,
    //     currency: "USD",
    //     payment_method: id,
    //     confirm: true,
    //   });
    //   return payment;

    // case 60:
    //   payment = await stripe.paymentIntents.create({
    //     amount: amount - amount * 0.3,
    //     currency: "USD",
    //     payment_method: id,
    //     confirm: true,
    //   });
    // case 70:
    //   payment = await stripe.paymentIntents.create({
    //     amount: amount - amount * 0.35,
    //     currency: "USD",
    //     payment_method: id,
    //     confirm: true,
    //   });
    //   return payment;

    // case 80:
    //   payment = await stripe.paymentIntents.create({
    //     amount: amount - amount * 0.4,
    //     currency: "USD",
    //     payment_method: id,
    //     confirm: true,
    //   });
    //   return payment;

    // case 90:
    //   payment = await stripe.paymentIntents.create({
    //     amount: amount - amount * 0.45,
    //     currency: "USD",
    //     payment_method: id,
    //     confirm: true,
    //   });
    //   return payment;

    // case 100:
    //   payment = await stripe.paymentIntents.create({
    //     amount: amount - amount * 0.5,
    //     currency: "USD",
    //     payment_method: id,
    //     confirm: true,
    //   });
    //   return payment;
    default:
      // payment = await stripe.paymentIntents.create({
      //   amount,
      //   currency: "USD",
      //   payment_method: id,
      //   confirm: true,
      // });
      return payment;
  }
};

module.exports = {
  checkOutService,
};
