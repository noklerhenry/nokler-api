const nodemailer = require('nodemailer')
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const sendEmail = async (req, res) => {
    
}

module.exports = {
    sendEmail
};