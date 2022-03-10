let transporter = nodemailer.createTransport({
    host:"smtp.ethereal.email",
    post:587,
    secure:false,
    auth: {
        user: "noklerhenry@gmail.com",
        pass: "	nuyQi3b3gDZiGFi"
    }
})

let mailOptions = {
    from: "Nokler",
    to: "gonzalosoria.sg@gmail.com",
    subject: "prueba de mail con nodemailer",
    text: "nokler games papá"
}

transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        res.status(500).send(error.message)
    } else {
        console.log("Email enviado")
        res.status(200).json(req.body)
    }
} )
