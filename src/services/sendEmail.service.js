const nodemailer = require('nodemailer')
const { google, GoogleApis } = require('googleapis')
var fs   = require('fs');


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

const sendMail = async (gamesPurchased,payment) => {
    
    const {name,platform,store,region,quantity,key} = gamesPurchased

    const contentHtmlSucceeded = `
    <div style="width: fit-content;margin: auto;padding:10px;color:#8c06f7;background:#121019;">
        <div >
            <h1 style="font-size:30px">NØKLER</h1>
            <h2>Pago realizado con exito.</h2>
        </div>
        <div style="margin: auto">
            <p >Se acredito correctamente el pago de ${payment.amount / 100} ${payment.currency} de la
                tarjeta
                ${payment.charges.data[0].payment_method_details.card.brand}
                xxxx-xxxx-xxxx-${payment.charges.data[0].payment_method_details.card.last4} 
            </p>
            <div style="padding:5px;">
                 <h3 style="margin-bottom: 0;text-decoration: underline; " >Informacion de compra:</h3>
                <h4 style="display: inline-block; margin:2px;">Juego:</h4>
                <h5 style="display: inline-block; margin:2px;">${name} x ${quantity}</h5>
                <br>
                <h4 style="display: inline-block; margin:2px;">KEY:</h4>
                <h5 style="display: inline-block; margin:2px;">${key}</h5>
                <br>
                <h4 style="display: inline-block; margin:2px;">Tienda:</h4>
                <h5 style="display: inline-block; margin:2px;">${store}</h5>
                <br>
                <h4 style="display: inline-block; margin:2px;">Plataforma:</h4>
                <h5 style="display: inline-block; margin:2px;">${platform}</h5>
                <br>
                <h4 style="display: inline-block; margin:2px;">Region:</h4>
                <h5style="display: inline-block; margin:2px;">${region}</h5style=>
                <br>
                <h4 style="display: inline-block; margin:2px;">Factura:</h4>
                <h5 style="display: inline-block; margin:2px;"> ${payment.charges.data[0].receipt_url}</h5>
                <br>
                <p>Codigo de reembolso: ${payment.charges.data[0].id}</p>
                <br>
                <br>
                <p>© 2022 Nøkler. All rights reserved</p>
            </div>

        </div>
    </div>
    `


    const contentHtmlFailed = `
    <div style="width: fit-content;margin: auto;padding:10px;color:#8c06f7;background:#121019;">
        <div >
            <h1 style="font-size:30px">NØKLER</h1>
        </div>
        <div style="margin: auto">
            <p >No se pudo procesar el pago de ${payment.amount / 100} ${payment.currency} de la
                tarjeta
                ${payment.charges.data[0].payment_method_details.card.brand}
                xxxx-xxxx-xxxx-${payment.charges.data[0].payment_method_details.card.last4} 
            </p>
        </div>
    </div>    `

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
                to: payment.charges.data[0].billing_details.email,
                subject: 'Payment status: aproved',
                html: contentHtmlSucceeded
            }
            const result = await transporter.sendMail(mailOptionsSucceeded)
            return result            
        } else {
            const mailOptionsFailed = {
                from:'Nokler Games',
                to: payment.charges.data[0].billing_details.email,
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


const contactMail = async (data) => { 

    const { name, email, message } = data

    const contactHtml = `
    <h2>Nombre de usuario: ${name}</h2>
    <h2>Mail de usuario: ${email}</h2><br>
    <p>
    Mensaje:<br>
    ${message} 
    </p>
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

        const contactMailContent = {
            from:'Nokler Games',
            to: 'noklerhenry@gmail.com',
            subject: 'Contact us',
            html: contactHtml
        }
        const result = await transporter.sendMail(contactMailContent)
        return result
    } catch (error) {
        console.log(error)
    }


}

module.exports = {
  sendMail,
  contactMail
};
