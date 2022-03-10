const nodemailer = require('nodemailer')
const { google, GoogleApis } = require('googleapis')
const { Module } = require('module')

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})


const sendMail = async (payment) => {
    const contentHtmlSucceeded = `
    <h1>Nokler pago realizado:</h1>
    <p>Se acredito correctamente el pago de ${payment.ammount} USD de la tarjeta ${payment.charges.data[0].payment_method_details.card.brand} xxxx-xxxx-xxxx-${payment.charges.data[0].payment_method_details.card.last4} <br/>
    Facturacion: ${payment.charges.data[0].receipt_url}
    </p>>
    `
    const contentHtmlFailed = `
    <h1>Nokler pago realizado:</h1>
    <p>No se pudo acreditar el pago de ${payment.ammount} USD de la tarjeta ${payment.charges.data[0].payment_method_details.card.brand} xxxx-xxxx-xxxx-${payment.charges.data[0].payment_method_details.card.last4} <br/>
    </p>>
    `

    try {
        const accessToken = await oAuth2Client.getAccessToken()
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                type:'OAuth2',
                user:'noklerhenry@gmail.com',
                clientId:CLIENT_ID,
                clientSecret:CLIENT_SECRET,
                refreshToken:REFRESH_TOKEN,
                accessToken:accessToken
            }
        })  
        
        if(payment.status === 'succeeded') {
            const mailOptionsSucceeded = {
                from:'Nokler Games',
                to:payment.charges.data[0].billing_details.email,
                subject: 'Payment status: aproved',
                html: contentHtmlSucceeded
            } 
            const result = await transporter.sendMail(mailOptionsSucceeded)
            return result
        } else {
            const mailOptionsFailed = {
                from:'Nokler Games',
                to:payment.charges.data[0].billing_details.email,
                subject: 'Payment status: failed',
                html: contentHtmlFailed
            } 
            const result = await transporter.sendMail(mailOptionsFailed)
            return result
        }        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    sendMail
};