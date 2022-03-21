const express = require("express");
const router = express();


const { 
    sendMail
 } = require("../services/sendEmail.service");

const payment = require('../checkoutPayment.json')

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
        keyId:product?.key?.map(k => k.id)        
      }

    const result = await sendMail(gamesPurchased, payment)
    res.send(result)
});
