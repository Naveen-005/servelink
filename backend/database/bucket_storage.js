var Minio = require('minio')
var config = require('../config.json');
const multer = require('multer');
const upload = multer();

//const file='../../../Pictures/posters/pits.png'

var minioClient = new Minio.Client({
  endPoint: config.minio_endpoint,
  port: config.minio_port,
  useSSL: false,
  accessKey: config.minio_access_key,
  secretKey: config.minio_secret_key,
})

/*
minioClient.fPutObject('servelink', '/test/pic.jpg', file, {}, function (err, etag) {
    if (err)
        console.log(err) 
    else
        console.log('File uploaded successfully.')
})
*/

module.exports = { minioClient,upload};