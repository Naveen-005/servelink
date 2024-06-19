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
    res.send('respond with a resource');

    //textOverlay();
});


async function textOverlay(){
    //const image=await Jimp.read('backend/Untitled.png');
    const font=await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
    image.print(font,5,5,"Hero Badge");
    console.log(image)
    //await image.writeAsync('edited.png');
}

module.exports = router;