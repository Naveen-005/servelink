var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
const { organizationModel } = require('../../database/db');
//const {generateUsername} = require("unique-username-generator");
var crypto = require('crypto');
//var uniqid = require('uniqid');

/*
function uid_generator(name){
    var username = generateUsername("-", 4, 20, name);
    return organizationModel.findOne({uid: username})
        .then((q_res)=>{
            if(!q_res){
                return username;
            } else {
                return uid_generator(name);
            }
        });
}
*/

router.post('/', function (req, res, next) {

    const organization_instance = new organizationModel(req.body);


    organizationModel.findOne({ 'email': req.body.email })
        .then((q_res) => {

            if (!q_res) {

                organization_instance.token = crypto.randomBytes(64).toString('hex');
                organization_instance.password = passwordHash.generate(req.body.password);

                organization_instance.save()
                    .then((mongo_res) => {
                        res.send({
                            name: mongo_res.name,
                            org_id: mongo_res._id,
                            token: mongo_res.token
                        })
                    }
                );

                /*
                uid_generator(req.body.name)
                    .then((uid)=>{
    
                        organization_instance.uid=uid
                        organization_instance.save()
                        .then((mongo_res)=>{
                            res.send({
                                name:mongo_res.name,
                                uid:mongo_res.uid,
                                token:mongo_res.token
                            })
                        });
    
                    })
                    .catch((error) => {
                        console.log("Error occurred:", error);
                });
                */

            }
            else {
                res.status(409)
                res.send('Email or phone number already registered');
            }
        });

});


module.exports = router;