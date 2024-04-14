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

module.exports = router;