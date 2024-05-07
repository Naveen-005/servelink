var express = require('express');
var router = express.Router();
const {VolunteerModel,organizationModel} = require('../../database/db')

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.cookies.admin){

    organizationModel.find({ verified: false })
    .then((m_res)=>{
        res.send(m_res)
    })

  }
  else{
    res.status(401).send("This page is for admin")
  }
});

/*
router.post('/', function(req, res, next) {
    if(req.cookies.admin){

        organizationModel.findById(req.body)
        .then((m_res)=>{
            //res.send(m_res)
        })
    
      }
      else{
        res.status(401).send("This page is for admin")
      }
    
});
*/

router.post('/', function(req, res, next) {
    if(req.cookies.admin){
        // Extract the organization ID from the request body
        const orgId = req.body.id;
        console.log(orgId)

        // Update the organization document to set verified status to true
        organizationModel.findOneAndUpdate(
            { _id: orgId },
            { verified: true },
            { new: true }
        )
        .then(updatedOrg => {
            if(updatedOrg) {
                res.send("Organization verified successfully");
            } else {
                res.status(404).json({ error: "Organization not found" });
            }
        })
        .catch(error => {
            //console.error("Error verifying organization:", error);
            res.status(500).send("Internal Server Error");
        });
    } else {
        res.status(401).send("This page is for admin");
    }
});



module.exports = router;