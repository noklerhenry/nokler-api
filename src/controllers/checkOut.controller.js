const {
  checkOutService
} = require('../services/checkOut.service')

const {createOrder} = require('../services/createOrder.service.js');
const { sendMail } = require('../services/sendEmail.service');

// const payment = require('../checkoutData.json')

const checkOut =  (req, res) => {
    const { amount, id, product } = req.body;  
    console.log(req.body)

    let gamesPurchased = {
        name: product?.game?.name,
        gameId: product?.gameId,
        platform: product?.platform?.name,
        store: product?.store?.name,
        region: product?.region,
        price: product?.price,
        quantity: product?.quantity,
        userId: product?.userId,
        key: product?.key?.slice(0,product.quantity)
        
      }
  
     console.log(gamesPurchased)

    try {      
      // const payment = await checkOutService(amount,id)

      // const order = await createOrder(gamesPurchased,payment)

      // const email = await sendMail(gamesPurchased, payment)

      checkOutService(amount,id)
        .then(response => {
          createOrder(gamesPurchased,response)
          sendMail(gamesPurchased,response)
        } )

      res.status(200).send('order');

    } catch (error) {

      console.log(error);
      res.json({message: error});
    }
  };
    


  module.exports = {
    checkOut,
  };
