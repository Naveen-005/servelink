const mongoose = require('mongoose');
var config = require('../config.json');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.connect(config.mongodb_url)
  .then(() => console.log('MongoDb Connected!'))
  .catch((err) => {
    console.log("mongodb eroor: ", err)
  });

//schemas

const volunteerSchema = new Schema({
  //author: ObjectId,
  first_name: String,
  last_name: String,
  email: String,
  phone_no: String,
  city: String,
  district: String,
  dob: Date,
  password: String,
  token: String,
});
const VolunteerModel = mongoose.model('Volunteers', volunteerSchema);

const organizationSchema = new Schema({

  name: String,
  address: String,
  district: String,
  country: String,
  email: String,
  password: String,
  token: String,

});
const organizationModel = mongoose.model('Organizations', organizationSchema);

const eventSchema = new Schema({
  title: String,
  location: String,
  date: Date,
  short_description: String,
  long_description: String,
  required: Number,
  org_id:String,
  enrolled: Number,
  skills: Object

});
const eventModel = mongoose.model('Events', eventSchema);

const eventEnrollmentSchema = new Schema({
  event_id: String,
  vol_id: String
});
const eventEnrollmentModel = mongoose.model('Event_enrollment',eventEnrollmentSchema);


module.exports = { VolunteerModel, organizationModel, eventModel, eventEnrollmentModel };