var express = require('express');
var router = express.Router();
const { organizationModel,messageModel,eventEnrollmentModel,eventModel } = require('../database/db');
/*
router.get('/', async function(req, res, next) {
    if(req.cookies.uid) {
      try {
   
        const enrollments = await eventEnrollmentModel.find({ vol_id: req.cookies.uid });
        
        const eventIds = enrollments.map(enrollment => enrollment.event_id);
        
        const messages = await messageModel.find({ event_id: { $in: eventIds } });
        console.log("messages:\n",messages)
        res.send(messages); 
      } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error' );
      }
    } else {
      res.status(400).send('Error fetching messages');
    }
});
*/

router.get('/', async function(req, res, next) {
  if(req.cookies.uid) {
    try {
      const enrollments = await eventEnrollmentModel.find({ vol_id: req.cookies.uid });
      const eventIds = enrollments.map(enrollment => enrollment.event_id);

      const messages = await messageModel.find({ event_id: { $in: eventIds } });

      // Fetch events to get titles and organization ids
      const events = await eventModel.find({ _id: { $in: eventIds } });

      // Fetch organizations to get organization names
      const orgIds = events.map(event => event.org_id);
      const organizations = await organizationModel.find({ _id: { $in: orgIds } });

      // Prepare the response with event titles, organization names, and messages
      const enrichedMessages = messages.map(message => {
        const event = events.find(event => event._id.toString() === message.event_id);
        const organization = organizations.find(org => org._id.toString() === event.org_id);
        return {
          message: message.message,
          event_title: event ? event.title : 'Unknown Event',
          organization_name: organization ? organization.name : 'Unknown Organization'
        };
      });

      //console.log("enriched messages:\n", enrichedMessages);
      res.send(enrichedMessages); 
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    res.status(400).send('Error fetching messages');
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