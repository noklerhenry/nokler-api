const {
  checkOutService
} = require('../services/checkOut.service')

const {createOrder} = require('../services/createOrder.service.js');
const { sendMail } = require('../services/sendEmail.service');
const { deleteKeys } = require('../services/deleteKey.service');

// const payment = require('../checkoutPayment.json');

const checkOut =  async (req, res) => {
    const { amount, id, product } = req.body;  

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
  
    //  console.log(gamesPurchased)

    try {      
      const payment = await checkOutService(amount,id)

      const order = await createOrder(gamesPurchased,payment)

      await deleteKeys (gamesPurchased.keyId)

      await sendMail(gamesPurchased, payment)



      res.status(200).send(order);

    } catch (error) {

      console.log(error);
      res.json({message: error});
    }
  };
    


  module.exports = {
    checkOut,
  };
