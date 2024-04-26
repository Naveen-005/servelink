var express = require('express');
var router = express.Router();
const { organizationModel } = require('../../database/db');

router.get('/', function(req, res, next) {

    if(req.query.id){

    organizationModel.findById(req.query.id).select('-password').then((m_res)=>{
        console.log(m_res)
        res.send(m_res)
    })
    //console.log(req.query.id)

}

});

module.exports = router;