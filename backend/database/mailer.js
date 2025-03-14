var nodemailer = require('nodemailer');
var config = require('../config.json');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
     user: config.email,
     pass: config.email_password,
    },
   });

module.exports = {transporter};