var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
const {VolunteerModel} = require('../../database/db');
const {generateUsername} = require("unique-username-generator");
var crypto = require('crypto');

function uid_generator(name){
    var username = generateUsername("-", 4, 20, name);
    return VolunteerModel.findOne({uid: username})
        .then((q_res)=>{
            if(!q_res){
                return username;
            } else {
                return uid_generator(name);
            }
        });
}

router.post('/', function(req, res, next) {

    const volunteer_instance = new VolunteerModel(req.body);
 
    
    VolunteerModel.findOne( {$or:[{ 'email': req.body.email },{'phone_no':req.body.phone_no}]})
    .then((q_res)=>{

        if(!q_res){

            volunteer_instance.token = crypto.randomBytes(64).toString('hex');

            uid_generator(req.body.first_name)
                .then((uid)=>{

                    volunteer_instance.uid=uid
                    volunteer_instance.save()
                    .then((mongo_res)=>{
                        res.send({
                            name:mongo_res.first_name,
                            uid:mongo_res.uid,
                            token:mongo_res.token
                        })
                    });

                })
                .catch((error) => {
                    console.log("Error occurred:", error);
            });

        }
        else{
            res.status(409)
            res.send('Email or phone number already registered');
        }
    });
    
});


module.exports = router;