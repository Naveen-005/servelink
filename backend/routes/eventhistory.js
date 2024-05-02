var express = require('express');
var router = express.Router();
const { eventModel } = require('../database/db');
const { eventEnrollmentModel} = require('../database/db');
/* GET home page. */
router.get('/', function(req, res, next) {
    const volunteerId = req.cookies.uid; // Assuming req.cookies.uid contains the volunteer id

    // Find all enrollments for the volunteer
    eventEnrollmentModel.find({ vol_id: volunteerId })
        .then(enrollments => {
            // Extract event IDs from enrollments
            const eventIds = enrollments.map(enrollment => enrollment.event_id);

            // Find event details for all the event IDs
            return eventModel.find({ _id: { $in: eventIds } });
        })
        .then(events => {
            // Return the event details
            res.json(events);
            console.log(events)
        })
        .catch(err => {
            console.error('Error:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});




module.exports = router;