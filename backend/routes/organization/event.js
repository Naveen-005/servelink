var express = require('express');
var router = express.Router();
const { eventModel } = require('../../database/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
    if (req.cookies.token) {
        eventModel.find({org_id:req.cookies.org_id})
        .then((m_res)=>{
            res.send(m_res)
        })
    }
    else{
        res.status(401)
        res.send("not logged in")
    }

});

module.exports = router;
