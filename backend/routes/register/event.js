var express = require('express');
var router = express.Router();
const { eventModel, organizationModel } = require('../../database/db');
const { minioClient} = require('../../database/bucket_storage')
//var uniqid = require('uniqid');
const multer = require('multer');
const storage = multer.memoryStorage(); // Store file data in memory
const upload = multer({ storage: storage });


/* GET users listing. */
router.post('/', upload.single('file'), function (req, res, next) {
  if (req.body.auth) {
    organizationModel.findOne(req.body.auth)
      .then((mongo_res) => {
        //console.log("mongores:",mongo_res)
        //console.log(req.file)
        var file = req.file.buffer
        console.log(req.body.formData)
        const event_instance = new eventModel(req.body.formData);
        event_instance.org_id = req.body.auth._id
        event_instance.enrolled=0
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
