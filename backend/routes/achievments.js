var express = require('express');
var router = express.Router();
const { achievmentModel,eventModel,organizationModel } = require('../database/db')
let Jimp = require('jimp');
const { minioClient } = require('../database/bucket_storage')
const multer = require('multer');
const storage = multer.memoryStorage(); // Store file data in memory
const upload = multer({ storage: storage });

router.get('/', async function(req, res, next) {
  try {
    const achievments = await achievmentModel.find({ vol_id: req.query.id });

  
    const eventIds = achievments.map(achievment => achievment.event_id);

    const orgIds = achievments.map(achievment => achievment.org_id);

    const events = await eventModel.find({ _id: { $in: eventIds } }, 'title');
  
    const organizations = await organizationModel.find({ _id: { $in: orgIds } }, 'name');

    

 
    const formattedAchievments = achievments.map(achievment => ({
      _id: achievment._id,
      vol_id: achievment.vol_id,
      event_title: events.find(event => event._id.toString() === achievment.event_id)?.title || "Unknown Event",
      title: achievment.title,
      description: achievment.description,
      org_name: organizations.find(org => org._id.toString() === achievment.org_id)?.name || "Unknown Organization",
    }));
    console.log(formattedAchievments)
    res.send(formattedAchievments);
  } catch (err) {
    console.error("Error fetching achievments:", err);
    res.status(500).send("Error fetching achievments");
  }
});



router.post('/',upload.single('file'), function(req, res, next) {
    

  req.body.form.org_id=req.cookies.org_id

  const achievment_instance = new achievmentModel(req.body.form);
  achievment_instance.save()
    .then((m_res)=>{
      minioClient.putObject('servelink', '/achievment/' + m_res._id + '.png', req.file.buffer, {}, function (err, etag) {
        if (err)
          console.log(err)
        else
          console.log('File uploaded successfully.')
      })
    })

  //console.log(req.body.form)
  //console.log("file:",req.file)
  //console.log("cookies:",req.cookies)


  res.send('respond with a resource');
});



module.exports = router;