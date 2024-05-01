var express = require('express');
var router = express.Router();
const { VolunteerModel,eventEnrollmentModel } = require('../database/db');

router.get('/', function (req, res, next) {
    const eventId = req.query.id;

    // Find all enrollments for the specified event
    eventEnrollmentModel.find({ event_id: eventId }).then(enrollments => {
        // Get the volunteer IDs from the enrollments
        const volunteerIds = enrollments.map(enrollment => enrollment.vol_id);

        // Find all volunteers with the matching IDs
        VolunteerModel.find({ _id: { $in: volunteerIds } }).then(volunteers => {
            // Prepare response with volunteers and their skills
            const response = volunteers.map(volunteer => {
                const enrollment = enrollments.find(enrollment => enrollment.vol_id.toString() === volunteer._id.toString());
                return {
                    _id: volunteer._id,
                    first_name: volunteer.first_name,
                    last_name: volunteer.last_name,
                    email: volunteer.email,
                    phone_no: volunteer.phone_no,
                    skill: enrollment.skill,// Assuming you want to include skill here
                };
            });

            res.send(response);
        }).catch(err => {
            //console.error("Error finding volunteers:", err);
            res.status(500).send("Internal Server Error");
        });
    }).catch(err => {
        //console.error("Error finding enrollments:", err);
        res.status(500).send("Internal Server Error");
    });
});

module.exports = router;
