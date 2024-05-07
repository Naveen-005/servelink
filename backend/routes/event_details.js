var express = require('express');
var router = express.Router();
const { eventModel, organizationModel, eventEnrollmentModel, volunteerReportActionModel } = require('../database/db')

router.get('/', function (req, res, next) {
  eventModel.findOne({ _id: req.query.id })
    .then((event) => {
      if (!event) {
        return res.status(404).send("Event not found");
      }

      //console.log("Event fetched from MongoDB:", event);

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

          //event.date=event.date.toDateString()
          const responseData = {
            event: event,
            skill_enrollment: enrollmentCounts
          };
          //responseData.event.date = new Date(responseData.event.date).toLocaleDateString();
          //console.log("response:\n",responseData);
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


router.post('/', function (req, res, next) {
  if (req.cookies.token && req.cookies.uid) {
    //console.log(req.body)
    const eventEnrollmentInstance = new eventEnrollmentModel(req.body);
    eventEnrollmentModel.findOne({ event_id: req.body.event_id, vol_id: req.body.vol_id })
      .then((enrol) => {
        if (enrol) {
          res.status(500).send("you are already enrolled for the event")
          //console.log(enrol)
        }
        else {
          volunteerReportActionModel.findOne({ vol_id: req.body.vol_id }).then((report) => {
            if (report) {
              res.status(500).send("Your account is suspended.")
              //console.log("report",report)
            }
            else {
              eventEnrollmentInstance.save()
                .then((m_res) => {
                  eventModel.updateOne({ _id: m_res.event_id }, { $inc: { enrolled: 1 } })
                    .then((m_res2) => {
                      res.send("You have successfully registered for the event.")
                    })
                })
                .catch((err) => {
                  res.status(500)
                  res.send("error in registering")
                  console.log(err)
                })

            }
          })


        }
      }).catch((err) => {
        res.status(500)
        res.send("error in registering")
        console.log(err)
      })


  }
  else {
    res.status(401)
    res.send("User not logged in")
  }
});

module.exports = router;