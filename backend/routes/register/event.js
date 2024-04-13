var express = require('express');
var router = express.Router();
const { eventModel, organizationModel } = require('../../database/db');
const { minioClient, upload } = require('../../database/bucket_storage')
//var uniqid = require('uniqid');


/* GET users listing. */
router.post('/', upload.single('file'), function (req, res, next) {
  if (req.body.auth) {
    organizationModel.findOne(req.body.auth)
      .then((mongo_res) => {
        //console.log("mongores:",mongo_res)
        var file = req.file.buffer
        //console.log(req.body.auth)
        const event_instance = new eventModel(req.body.formData);
        event_instance.org_id = req.body.auth._id
        event_instance.save()
          .then((mongo_res) => {

            minioClient.putObject('servelink', '/event/' + mongo_res._id + '.jpg', file, {}, function (err, etag) {
              if (err)
                console.log(err)
              else
                console.log('File uploaded successfully.')
            })

            res.send('Event successfully registered');

          })



      })
  } else {
    res.status(401)
    res.send("No Authorization")
  }


});

router.get('/', function (req, res, next) {


  if (req.cookies.token) {

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    console.log("cookies:",req.cookies)
    eventModel.find({date: { $gte: today }})
    .then((m_res)=>{
      res.send(m_res)
    })
  }
  else{
    res.status(401)
    res.send('Not logged in')
  }


});

module.exports = router;
