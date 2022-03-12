const {
    sendMail
} = require('../services/sendEmail.service')


const sendEmail = async (req, res) => {
    sendMail()
        .then(result => res.status(200).send('mail enviado'))
        .catch(error => console.log(error.message))

}


module.exports = {
    sendEmail
};