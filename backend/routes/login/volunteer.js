var express = require('express');
var router = express.Router();
const {VolunteerModel} = require('../../database/db')
var passwordHash = require('password-hash');
var crypto = require('crypto');



router.post('/', function(req, res, next) {

    VolunteerModel.findOne({ 'email': req.body.email })
    .then((q_res)=>{
        if(q_res){
            if(passwordHash.verify(req.body.password, q_res.password)){

                generated_token = crypto.randomBytes(64).toString('hex');
                q_res.updateOne({token:generated_token}).then()
                res.send({
                    name:q_res.first_name,
                    uid:q_res.uid,
                    token:generated_token
                })
            }
            else{
                res.status(401)
                res.send("Invalid credentials")
            }
        }
        else{
            res.status(401)
            res.send("Invalid Credentials")
        }

    })
});

module.exports = router;