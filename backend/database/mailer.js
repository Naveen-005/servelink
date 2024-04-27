var nodemailer = require('nodemailer');
var config = require('../config.json');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
     user: 'servelink59@gmail.com',
     pass: 'trrc jexn bbwe akrb',
    },
   });

module.exports = {transporter};