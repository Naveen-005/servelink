var express = require('express');
var router = express.Router();
const { eventModel } = require('../database/db');
const { eventEnrollmentModel} = require('../database/db');
/* GET home page. */
router.get('/', function(req, res, next) {
    // eventModel.findById(req.id).select('title')
    // .then((m_res)=>{
    //     console.log(m_res)
    //     res.send(m_res)
    // })
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
// router.get('/', function(req, res, next) {
//     const volId = req.query.vol_id; 
    
//     eventEnrollmentModel.find({ vol_id: volId })
//         .then((enrollments) => {
         
//             const eventIds = enrollments.map(enrollment => enrollment.event_id);
//             eventModel.find({ _id: { $in: eventIds }})
//                 .then((events) => {
//                     console.log(events);
//                     res.send(events);
//                 })
//             });
//         });
// router.get('/', function(req, res, next) {
//     const userId = req.query.uid; // Assuming uid is passed in the query string
//     eventEnrollmentModel.find({ vol_id: userId })
//         .populate({
//             path: 'event_id',
//             select: 'title' // Select only the title field from the event document
//         })
//         .exec((err, enrollments) => {
//             if (err) {
//                 console.error('Error:', err);
//                 res.status(500).send('Internal Server Error');
//             } else {
//                 if (!enrollments || enrollments.length === 0) {
//                     res.status(404).send('No enrollments found for the user');
//                 } else {
//                     const enrolledEvents = enrollments.map(enrollment => enrollment.event_id.title);
//                     res.json(enrolledEvents);
//                 }
//             }
//         });
// });
module.exports = router;