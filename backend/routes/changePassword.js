var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
const { organizationModel, VolunteerModel } = require('../database/db');




router.put('/', function (req, res, next) {

    var newHashedPassword= passwordHash.generate(req.body.newPassword);

    if (req.cookies.org_id && req.cookies.token) {

        organizationModel.findById(req.cookies.org_id)
            .then((q_res) => {
                if (q_res) {
                    if (passwordHash.verify(req.body.oldPassword, q_res.password)) {

                        q_res.password=newHashedPassword
                        q_res.save()
                        .then(() => {
                            res.send("Password updated successfully")
                        })
                        .catch((err) => {

                            res.status(500)
                            res.send("Password updtion failed")
                        });

                    }else{
                        res.status(401)
                        res.send("Incorrect Password")
                    }
                }
            })

    }
    else if(req.cookies.org_id && req.cookies.token){

        VolunteerModel.findById(req.cookies.org_id)
            .then((q_res) => {
                if (q_res) {
                    if (passwordHash.verify(req.body.oldPassword, q_res.password)) {

                        q_res.password=newHashedPassword
                        q_res.save()
                        .then(() => {
                            res.send("Password updated successfully")
                        })
                        .catch((err) => {

                            res.status(500)
                            res.send("Password updtion failed")
                        });

                    }else{
                        res.status(401)
                        res.send("Incorrect Password")
                    }
                }
            })

    }
    else{
        res.status(402);
        res.send("please login to update password")
    }
})

module.exports = router;
