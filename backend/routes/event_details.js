var express = require('express');
var router = express.Router();
const {eventModel, organizationModel,eventEnrollmentModel} = require('../database/db')

/*
router.get('/', function(req, res, next) {
  eventModel.findOne({_id: req.query.id})
  .then((event)=>{
    const enrollmentCounts = {};

    // Iterate through each skill in the event
    for (const skillName in event.skills) {
      // Get the skill count from the event
      const skillCount = event.skills[skillName];

      // Query event enrollments for the current event and skill
      //const enrollments = await 
      eventEnrollmentModel.countDocuments({
        event_id: event._id,
        skill: skillName
      }).then((enrollments)=>{
        enrollmentCounts[skillName] = enrollments;
      })
      
    }

    // Log the enrollment counts along with the skill name
    for (const skillName in enrollmentCounts) {
      console.log(`Skill: ${skillName}, Enrollment count: ${enrollmentCounts[skillName]}`);
      event.enrollmentCounts=enrollmentCounts
    }
    //console.log(event)
    res.send(event)
  })
});
*/

router.get('/', function(req, res, next) {
  eventModel.findOne({_id: req.query.id})
    .then((event) => {
      if (!event) {
        return res.status(404).send("Event not found");
      }

      console.log("Event fetched from MongoDB:", event);

      const enrollmentCounts = {};
      const skills = Object.keys(event.skills);
      const countPromises = [];

      skills.forEach(skillName => {
        const countPromise = eventEnrollmentModel.countDocuments({
          event_id: event._id,
          skill: skillName
        }).then((enrollments) => {
          enrollmentCounts[skillName] = enrollments;
        });
        countPromises.push(countPromise);
      });

      Promise.all(countPromises)
        .then(() => {
          //Object.assign(event, { enrollmentCounts });

          const responseData = {
            event: event,
            skill_enrollment: enrollmentCounts
          };
          console.log("response:\n",responseData);
          res.send(responseData);
        })
        .catch(error => {
          console.error("Error calculating enrollment counts:", error);
          res.status(500).send("Error calculating enrollment counts");
        });
    })
    .catch(error => {
      console.error("Error fetching event:", error);
      res.status(500).send("Error fetching event");
    });
});


router.post('/', function(req, res, next) {
  if(req.cookies.token && req.cookies.uid){
    const eventEnrollmentInstance = new eventEnrollmentModel(req.body);
    eventEnrollmentInstance.save()
    .then((m_res)=>{
      eventModel.updateOne({ _id: m_res.event_id }, { $inc: { enrolled: 1 } })
      .then((m_res2)=>{
        res.send("You have successfully registered for the event.")
      })
    })
    .catch((err)=>{
      res.status(500)
      res.send("error in registering")
    })
  }
  else{
    res.status(401)
    res.send("User not logged in")
  }
});

module.exports = router;