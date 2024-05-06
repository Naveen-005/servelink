var express = require('express');
var router = express.Router();
const {VolunteerModel, volunteerReportModel, volunteerReportActionModel} = require('../database/db')

router.post('/', function(req, res, next) {
  if(req.cookies.admin){

    const reportActionInstance = new volunteerReportActionModel(req.body);

    volunteerReportModel.findOneAndUpdate({vol_id: req.body.vol_id},{actionTaken: true})
    .then(()=>{
        return reportActionInstance.save()
        
    })
    .then(()=>{
        res.send("Action Taken");
    })

  }
});

module.exports = router;