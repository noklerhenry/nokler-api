const express = require("express");
const router = express();


const { 
    sendMail
 } = require("../services/sendEmail.service");

const payment = require('../checkoutData.json')

module.exports = router;

router.post("/testmail", async (req, res) => {
    // console.log(payment)
    const result = await sendMail(payment)
    res.send(result)
});
