const {
  checkOutService
} = require('../services/checkOut.service')


const checkOut = async (req, res) => {

    const { amount, id } = req.body;
  
    try {
      const payment = await checkOutService(amount,id)       

      res.send(payment);

    } catch (error) {
      console.log(error);
      res.json({message: error});
    }
  };

  module.exports = {
    checkOut,
  };

  //billing_details.email
  //billing_details.user

 