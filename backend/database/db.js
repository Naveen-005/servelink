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
  skills: [String],
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
  phone_no: String,
  zip_code: String,
  about: String,
  otp: String,
  verified: Boolean,
  joined_Date: Date,

});
organizationSchema.pre('save', function (next) {
  this.verified = false
  this.joined_Date = new Date()
  next();
});
const organizationModel = mongoose.model('Organizations', organizationSchema);

const eventSchema = new Schema({
  title: String,
  location: String,
  loc_lat: String,
  loc_lng: String,
  date: Date,
  time: String,
  short_description: String,
  long_description: String,
  conditions: String,
  required: Number,
  org_id: String,
  enrolled: Number,
  required: Number,
  skills: Object

});

eventSchema.pre('save', function (next) {
  let sumOfSkills = 0;
  const skills = this.skills;

  // Calculate sum of values in the skills object
  for (const skill in skills) {
    if (skill) {
      sumOfSkills += parseInt(skills[skill]);
    }
  }

  // Set required field to the sum of skills
  this.required = sumOfSkills;

  // Call next to continue the save process
  next();
});

const eventModel = mongoose.model('Events', eventSchema);

const eventEnrollmentSchema = new Schema({
  event_id: String,
  vol_id: String,
  skill: String
});
const eventEnrollmentModel = mongoose.model('Event_enrollment', eventEnrollmentSchema);

const messageSchema = new Schema({
  event_id: String,
  message: String
});
const messageModel = mongoose.model('Messages', messageSchema);

const volunteerReportSchema = new Schema({
  vol_id: String,
  reason: String,
  event_id: String,
  actionTaken: Boolean
});
volunteerReportSchema.pre('save', function (next) {
  this.actionTaken = false
  next();
});
const volunteerReportModel = mongoose.model('Vol_Report', volunteerReportSchema);

const volunteerReportActionSchema = new Schema({
  vol_id: String,
  action: String,
});
const volunteerReportActionModel = mongoose.model('vol_report_acton', volunteerReportActionSchema);

const adminSchema = new Schema({
  username: String,
  password: String
});
const adminModel = mongoose.model('admin', adminSchema);

const eventReviewSchema = new Schema({
  vol_id: String,
  event_id: String,
  reviewMsg: String
});
const eventReviewModel = mongoose.model('event_review',eventReviewSchema);


module.exports = {
  VolunteerModel,
  organizationModel,
  eventModel,
  eventEnrollmentModel,
  messageModel,
  volunteerReportModel,
  volunteerReportActionModel,
  adminModel,
  eventReviewModel
};