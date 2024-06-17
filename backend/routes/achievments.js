var express = require('express');
var router = express.Router();

let Jimp = require('jimp');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
    res.send('respond with a resource');
});
  

module.exports = router;