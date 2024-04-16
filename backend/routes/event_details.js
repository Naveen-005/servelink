var express = require('express');
var router = express.Router();
const {eventModel, organizationModel,eventEnrollmentModel} = require('../database/db')

/* GET users listing. */
router.get('/', function(req, res, next) {
  eventModel.findOne({_id: req.query.id})
  .then((m_res)=>{
    res.send(m_res)
  })
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