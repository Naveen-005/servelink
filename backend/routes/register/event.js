var express = require('express');
var router = express.Router();
const { eventModel, organizationModel } = require('../../database/db');
const { minioClient } = require('../../database/bucket_storage')
//var uniqid = require('uniqid');
const multer = require('multer');
const storage = multer.memoryStorage(); // Store file data in memory
const upload = multer({ storage: storage });


// Function to calculate the score for an event
function calculateEventScore(event, volunteerLat, volunteerLng, volunteerSkills) {
  
  const distanceScore = calculateDistanceScore(event.loc_lat, event.loc_lng, volunteerLat, volunteerLng);
  const skillScore = calculateSkillScore(event.skills, volunteerSkills);
  const dateScore = calculateDateScore(new Date(event.date));
  const totalScore = (0.5 * distanceScore) + (0.3 * skillScore) + (0.2 * dateScore);

  return totalScore;
}

function calculateDistanceScore(eventLat, eventLng, volunteerLat, volunteerLng) {
  const earthRadius = 6371; // Radius of the Earth in kilometers

  // Convert latitude and longitude from degrees to radians
  const lat1Rad = toRadians(eventLat);
  const lat2Rad = toRadians(volunteerLat);
  const deltaLat = toRadians(volunteerLat - eventLat);
  const deltaLng = toRadians(volunteerLng - eventLng);

  // Haversine formula
  const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
            Math.cos(lat1Rad) * Math.cos(lat2Rad) *
            Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c; // Distance in kilometers

  // You can define your scoring function based on the distance
  // For example, you might want to give a higher score to closer events
  // Here, I'm just using a linear function, but you can adjust it according to your preference
  const maxDistance = 100; // Maximum distance in kilometers
  const minScore = 0;
  const maxScore = 20; 
  const distanceScore = 1 - (distance / maxDistance); // Linear function for scoring

  // Ensure the score is within the range [minScore, maxScore]
  return Math.max(minScore, Math.min(maxScore, distanceScore));
}

// Function to convert degrees to radians
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function calculateSkillScore(eventSkills, volunteerSkills) {
  let totalScore = 0;

  // Iterate through each skill required for the event
  for (const eventSkill in eventSkills) {
    // Check if the volunteer possesses this skill
    if (volunteerSkills.includes(eventSkill)) {

      totalScore += 3; 
    }
  }

  const normalizedScore = totalScore / Object.keys(eventSkills).length;

  return normalizedScore;
}

// Function to calculate the date score
function calculateDateScore(eventDate) {
  const today = new Date();
  const timeDifference = eventDate.getTime() - today.getTime();
  // Events closer to today get a higher score
  return Math.max(0, 1 - (timeDifference / (24 * 60 * 60 * 1000)));
}


router.post('/', upload.single('file'), function (req, res, next) {
  if (req.body.auth) {
    organizationModel.findOne(req.body.auth)
      .then((mongo_res) => {

        if (req.file.buffer) {
          var file = req.file.buffer
        }
        console.log(req.body.formData)
        const event_instance = new eventModel(req.body.formData);
        event_instance.org_id = req.body.auth._id
        event_instance.enrolled = 0

        event_instance.save()
          .then((mongo_res) => {
            if (req.file.buffer) {

              minioClient.putObject('servelink', '/event/' + mongo_res._id + '.jpg', file, {}, function (err, etag) {
                if (err)
                  console.log(err)
                else
                  console.log('File uploaded successfully.')
              })
            }

            res.send('Event successfully registered');

          })



      })
  } else {
    res.status(401)
    res.send("No Authorization")
  }


});



router.get('/', function (req, res, next) {

  if (req.cookies.token) {

    const today = new Date();
    //today.setHours(0, 0, 0, 0);
    eventModel.find({ date: { $gte: today } })
      .then((m_res) => {
        console.log("today:",today)
        console.log(m_res)
        res.send(m_res)
      })
  }
  else {
    res.status(401)
    res.send('Not logged in')
  }


});



/*
router.get('/', function (req, res, next) {
  if (req.cookies.token && req.cookies.uid) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    VolunteerModel.findById(req.cookies.uid)
      .then(volunteer => {
        if (!volunteer) {
          throw new Error("Volunteer not found");
        }
        const volunteerSkills = volunteer.skills;

        eventModel.find({ date: { $gte: today } })
          .then(events => {
            // Calculate scores for each event
            const scoredEvents = events.map(event => {
              const eventScore = calculateEventScore(event, req.body.loc_lat, req.body.loc_lng, volunteerSkills);
              return { event, score: eventScore };
            });

            scoredEvents.sort((a, b) => b.score - a.score);

            const sortedEvents = scoredEvents.map(item => item.event);

            res.send(sortedEvents);
          })
          .catch(error => {
            res.status(500).send({ error: error.message });
          });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
  } else {
    res.status(401).send({ message: "Unauthorized" });
  }
});
*/






module.exports = router;
