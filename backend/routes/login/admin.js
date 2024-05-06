var express = require('express');
var router = express.Router();
const {adminModel} = require('../../database/db')
var passwordHash = require('password-hash');

router.post('/', function(req, res, next) {

    adminModel.findOne({ 'username': req.body.username })
    .then((q_res)=>{
        if(q_res){
            if(passwordHash.verify(req.body.password, q_res.password)){

                res.send({
                    name:q_res.username,
                    admin_id:q_res._id,
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