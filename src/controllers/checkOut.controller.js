const {
  checkOutService
} = require('../services/checkOut.service')

const {createOrder} = require('../services/createOrder.service.js');
const { sendMail } = require('../services/sendEmail.service');


const checkOut = async (req, res) => {
    const { amount, id, cart } = req.body;  
        
    const gamesPurchased = cart.map(games => {
      return {
        name: games.game.name,
        gameId: games.gameId,
        platform: games.platform.name,
        store: games.store.name,
        region: games.region,
        price: games.price,
        quantity: games.quantity,
        userId: games.userId,
        key: games.key.slice(0,games.quantity)
        
      }
    })

    const userId = cart[0].userId            
    //  console.log(gamesPurchased)
    try {      
      const payment = await checkOutService(amount,id)
      // const order = await createOrder(gamesPurchased,payment,userId)
      // const email = await sendMail(gamesPurchased, payment)

      res.status(200).send(payment);

    } catch (error) {

      console.log(error);
      res.json({message: error});
    }
  };
    


  module.exports = {
    checkOut,
  };
