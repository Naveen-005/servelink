var express = require('express');
var router = express.Router();
const { eventModel } = require('../../database/db');
const {minioClient,upload} = require('../../database/bucket_storage')
var uniqid = require('uniqid');


/* GET users listing. */
router.post('/', upload.single('file'),function (req, res, next) {
  //console.log(req.body.formData)
  var file = req.file.buffer
  //console.log(req.file)
  const event_instance = new eventModel(req.body.formData);
  event_instance.event_id=uniqid();

  event_instance.save()
  .then((mongo_res)=>{console.log(mongo_res)})
  
  minioClient.putObject('servelink', '/event/'+event_instance.id+'.jpg', file, {}, function (err, etag) {
    if (err)
      console.log(err)
    else
      console.log('File uploaded successfully.')
  })
  
  res.send('Event successfully registered');
});

module.exports = router;
