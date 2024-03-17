var express = require('express');
var router = express.Router();
const {VolunteerModel} = require('../../database/db')
var passwordHash = require('password-hash');

router.get('/', function(req, res, next) {

    VolunteerModel.findOne({ 'email': req.body.email })
    .then((q_res)=>{
        if(q_res){
            if(passwordHash.verify(req.body.password, q_res.password)){
                res.send("Login Succesfull")
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