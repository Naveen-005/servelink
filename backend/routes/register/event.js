var express = require('express');
var router = express.Router();
const { eventModel } = require('../../database/db');
const {minioClient,upload} = require('../../database/bucket_storage')

/* GET users listing. */
router.post('/', upload.single('file'),function (req, res, next) {
  console.log(req.body.formData)
  var file = req.file.buffer
  console.log(req.file)

  
  minioClient.putObject('servelink', '/test/sample.jpg', file, {}, function (err, etag) {
    if (err)
      console.log(err)
    else
      console.log('File uploaded successfully.')
  })
  
  res.send('respond with a resource');
});

module.exports = router;
