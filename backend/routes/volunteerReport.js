var express = require('express');
var router = express.Router();
const {VolunteerModel, volunteerReportModel} = require('../database/db')


router.get('/', async function(req, res, next) {
    try {
        if(req.cookies.admin){

            const reportedVolunteers = await volunteerReportModel.find({ actionTaken: false }).populate('volunteer', 'first_name last_name').exec();
            console.log(reportedVolunteers);
            res.send(reportedVolunteers);
        } else {
            res.status(403).send("Forbidden"); 
        }
    } catch (error) {
        // Handle any errors
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
