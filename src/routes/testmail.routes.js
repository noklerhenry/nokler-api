const express = require("express");
const router = express();

const { sendMail } = require("../services/sendEmail.service");

const payment = require("../checkoutPayment.json");

module.exports = router;

router.post("/testmail", async (req, res) => {
  const { product } = req.body;

  let gamesPurchased = {
    name: product?.game?.name,
    gameId: product?.gameId,
    platform: product?.platform?.name,
    store: product?.store?.name,
    region: product?.region,
    price: product?.price,
    quantity: product?.quantity,
    userId: product?.userId,
    key: product?.key[0]?.value,
    // keyId:[product?.key[0]?.id]
    keyId: product?.key?.map((k) => k.id),
  };

  let order = {
    id: 1,
    dateOrder: "2022-03-23T19:40:28.411Z",
    status: true,
    userId: 4,
    key: ["sefg5852as52sa"],
    game: "Grand Theft Auto: San Andreas – The Definitive Edition",
    price: 6,
    store: "PlayStation Store",
    region: "ARG",
    platform: "PlayStation 4",
    user: {
      id: 4,
      email: "qondaprro0@gmail.com",
      rol: "USER",
      state: "STANDARD",
      enable: true,
      noklerCoins: 0,
    },
  };
  const result = await sendMail(gamesPurchased, payment, order);
  res.send(result);
});
