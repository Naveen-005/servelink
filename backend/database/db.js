const mongoose = require('mongoose');
var config = require('../config.json');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.connect(config.mongodb_url)
  .then(() => console.log('Connected!'))
  .catch((err)=>{
    console.log("mongodb eroor: ",err)
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

const organizationSchema = new Schema({

});
const organizationModel = mongoose.model('Organizations',organizationSchema);

const eventSchema = new Schema({

});
const eventModel = mongoose.model('Events',eventSchema);



module.exports = {VolunteerModel,organizationModel,eventModel}