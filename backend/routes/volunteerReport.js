var express = require('express');
var router = express.Router();
const {VolunteerModel, volunteerReportModel} = require('../database/db')


router.get('/', async function(req, res, next) {
    try {
        if(req.cookies.admin){

            const reportedVolunteers = await volunteerReportModel.find({actionTaken: false}).exec();
            const populatedReports = [];
            for (const report of reportedVolunteers) {
                const volunteer = await VolunteerModel.findById(report.vol_id).exec();
                
                if (volunteer) {
                    const populatedReport = {
                        first_name: volunteer.first_name,
                        last_name: volunteer.last_name,
                        reason: report.reason,
                        event_id: report.event_id,
                        vol_id: volunteer._id,
                    };
                    populatedReports.push(populatedReport);
                }
            }

            res.send(populatedReports);
        } else {
            res.status(403).send("Forbidden"); 
        }
    } catch (error) {

        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.post('/', function(req, res, next) {
    if(req.cookies.org_id){
        volunteerReportModel.findOne(req.body)
        .then((rep)=>{
            if(rep){
                res.status(300).send("You have already reported this user for this event")
            }else{
            reportInstance = new volunteerReportModel(req.body)
            reportInstance.save()
            .then(()=>{
                res.send("Reported volunteer")
            })
            }
        })
        .catch(()=>{
            res.status.send("Unable to report");
        })
    }else{
        res.status(401).send("Error reporting")
    }

});
  



module.exports = router;
