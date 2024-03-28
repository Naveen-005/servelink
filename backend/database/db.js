const mongoose = require('mongoose');
var config = require('../config.json');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.connect(config.mongodb_url)
  .then(() => console.log('MongoDb Connected!'))
  .catch((err)=>{
    console.log("mongodb eroor: ",err)
});

//schemas

const volunteerSchema = new Schema({
  //author: ObjectId,
  first_name: String,
  last_name: String,
  email:String,
  phone_no:String,
  city:String,
  district:String,
  dob: Date,
  password: String,
  token: String,
  uid: String,
});
const VolunteerModel = mongoose.model('Volunteers', volunteerSchema);

const organizationSchema = new Schema({

});
const organizationModel = mongoose.model('Organizations',organizationSchema);

const eventSchema = new Schema({

});
const eventModel = mongoose.model('Events',eventSchema);


const addeventSchema = new Schema({
  name:{
      type:String,
      required:true
  },
  location:{
      type:String,
  },
  date:{
      type:Date,      
  }
});

const addevent = mongoose.model('AddEvent',addeventSchema);



module.exports = {VolunteerModel,organizationModel,eventModel,addevent};