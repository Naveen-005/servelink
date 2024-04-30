var express = require('express');
var router = express.Router();
const { VolunteerModel } = require('../database/db');
/* GET home page. */
router.get('/', function(req, res, next) {
    VolunteerModel.find().select('first_name last_name')
    .then((m_res)=>{
        // console.log(m_res)
        res.send(m_res)
    })



});

module.exports = router;