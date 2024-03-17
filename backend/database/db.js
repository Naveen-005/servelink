const mongoose = require('mongoose');
var config = require('../config.json');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.connect(config.mongodb_url)
  .then(() => console.log('Connected!'))
  .catch((err)=>{
    console.log("eroor: ",err)
  });

//schemas

const volunteerSchema = new Schema({
  author: ObjectId,
  name: String,
  age: String,
  email:String,
  phone:String,
  password:String,
  date: Date
});

const VolunteerModel = mongoose.model('Volunteers', volunteerSchema);


module.exports = {VolunteerModel}