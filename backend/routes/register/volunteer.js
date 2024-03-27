var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
const {VolunteerModel} = require('../../database/db');

  
router.post('/', function(req, res, next) {

    const volunteer_instance = new VolunteerModel(req.body);
 
    
    VolunteerModel.findOne( {$or:[{ 'email': req.body.email },{'phone':req.body.phone}]})
    .then((q_res)=>{

        if(!q_res){

            //volunteer_instance.password=passwordHash.generate(req.body.password);
            volunteer_instance.save()
            .then((mongo_res)=>{
                res.send(mongo_res)
            });
        }
        else{
            res.status(409)
            res.send('credentials already exist');
        }
    });
    
});


module.exports = router;