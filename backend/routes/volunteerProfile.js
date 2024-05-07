var express = require('express');
var router = express.Router();
const { VolunteerModel, eventEnrollmentModel} = require('../database/db');


/*
router.get('/', function(req, res, next) {
  if(req.query.id){
    VolunteerModel.findById(req.query.id)
    .then((vol)=>{
        res.send(vol)
    })
    .catch((err)=>{
        res.status(500).send("Error finding volunteer")
    })

  }
});
*/

router.get('/', function(req, res, next) {
  if(req.query.id){
    VolunteerModel.findById(req.query.id)
    .then((vol)=>{
        eventEnrollmentModel.countDocuments({ vol_id: req.query.id })
        .then(count => {
            const response = {
                volunteer: vol,
                eventCount: count
            };
            res.send(response);
        })
        .catch((err)=>{
            res.status(500).send("Error finding event enrollments")
        });
    })
    .catch((err)=>{
        res.status(500).send("Error finding volunteer")
    });
  }
});


module.exports = router;
