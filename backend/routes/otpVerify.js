var express = require('express');
var router = express.Router();
const otpGenerator = require('otp-generator')
var { transporter } = require('../database/mailer');
var config = require('../config.json');
const { organizationModel } = require('../database/db');
const e = require('express');


router.put('/', function (req, res, next) {

    if (req.cookies.org_id && req.body.email) {

        organizationModel.findOne({ 'email': req.body.email })
            .then((q_res) => {
                if (!q_res) {

                    //paste contents here
                    var otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false })
                    var mailOptions = {
                        from: config.email,
                        to: req.body.email,
                        subject: 'OTP for Servelink email verification',
                        text: 'OTP: ' + otp
                    };

                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            res.status(500)
                            res.send("Verification failed")
                            console.log(error)
                        } else {
                            res.send("OTP sent to your email")
                            organizationModel.findByIdAndUpdate(req.cookies.org_id, {
                                email: req.body.email,
                                otp: otp

                            }).then().catch()

                        }
                    });

                }
                else {
                    res.status(409).send("Email already registered")
                }

            })



    } else {
        res.status(500)
        res.send("Failed")
    }

});

router.post('/', function (req, res, next) {

    if (req.cookies.org_id && req.body.otp) {
        organizationModel.findById(req.cookies.org_id)
            .then((m_res) => {
                console.log(req.body.otp)
                console.log(m_res.otp)
                if (req.body.otp === m_res.otp) {

                    res.send("Email Verified")
                }
                else {
                    res.status(401)
                    res.send("Verification failed")
                }
            })
            .catch((err) => {
                res.status(401)
                res.send("Verification failed")
            })
    }
});

module.exports = router;