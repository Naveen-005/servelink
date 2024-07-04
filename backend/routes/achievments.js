var express = require('express');
var router = express.Router();
const { achievmentModel } = require('../database/db')
let Jimp = require('jimp');
const { minioClient } = require('../database/bucket_storage')
const multer = require('multer');
const storage = multer.memoryStorage(); // Store file data in memory
const upload = multer({ storage: storage });



router.get('/', function(req, res, next) {



  res.send('respond with a resource');

});

router.post('/',upload.single('file'), function(req, res, next) {
    

  //textOverlay(text);
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


async function textOverlay(text){
    //const image=await Jimp.read('backend/Untitled.png');
    const font=await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
    image.print(font,5,5,text);
    //console.log(image)
    //await image.writeAsync('edited.png');
}

module.exports = router;