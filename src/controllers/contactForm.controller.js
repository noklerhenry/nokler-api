const { contactMail } = require('../services/sendEmail.service')

const contactFormMail = async (req, res) => {

    const { contactForm } = req.body
    try {
        const mailForm = await contactMail(contactForm)
        res.status(200).json(mailForm)        
    } catch (error) {
        console.log(error);
        res.json({message: error});  
    }
};

module.exports = {contactFormMail}