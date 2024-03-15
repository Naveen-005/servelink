var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const volunteerSchema = new Schema({
    author: ObjectId,
    name: String,
    age: String,
    email:String,
    phone:String,
    date: Date
});

const VolunteerModel = mongoose.model('Volunteers', volunteerSchema);
  
router.get('/', function(req, res, next) {

    const volunteer_instance = new VolunteerModel(req.body);
    //console.log(req.body);

    VolunteerModel.findOne( {$or:[{ 'email': req.body.email },{'phone':req.body.phone}]})
    .then((q_res)=>{

        if(!q_res){
            volunteer_instance.save()
            .then((mongo_res)=>{
                res.send(mongo_res)
            });
        }
        else{
            res.send('credentials already exist');
        }
    });
});


module.exports = router;