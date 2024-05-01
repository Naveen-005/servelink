var express = require('express');
var router = express.Router();
const { eventModel } = require('../database/db');


router.get('/', function(req, res, next) {

    eventModel.find().select('loc_lat loc_lng')
    .then((m_res)=>{
        console.log(m_res)
        res.send(m_res)
    })

});

module.exports = router;
