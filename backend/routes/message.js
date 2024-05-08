var express = require('express');
var router = express.Router();
const { organizationModel,messageModel,eventEnrollmentModel } = require('../database/db');

router.get('/', async function(req, res, next) {
    if(req.cookies.uid) {
      try {
   
        const enrollments = await eventEnrollmentModel.find({ vol_id: req.cookies.uid });
        
        const eventIds = enrollments.map(enrollment => enrollment.event_id);
        
        const messages = await messageModel.find({ event_id: { $in: eventIds } });
        
        res.send(messages); 
      } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error' );
      }
    } else {
      res.status(400).send('No volunteer ID provided');
    }
});

router.post('/', function(req, res, next) {
    
    if(req.cookies.org_id){
        const message_instance = new messageModel(req.body);
        message_instance.save()
        .then(()=>{
            res.send("Message sent successfully")
        })
        .catch((err)=>{
            res.status(500).send("Message failed to sent")
        })
    }

});

module.exports = router;