var express = require('express');
var router = express.Router();
const { organizationModel } = require('../../database/db');
const multer = require('multer');
const storage = multer.memoryStorage(); // Store file data in memory
const upload = multer({ storage: storage });
const { minioClient } = require('../../database/bucket_storage')

router.get('/', function(req, res, next) {

    if(req.query.id){

    organizationModel.findById(req.query.id).select('-password').then((m_res)=>{
        console.log(m_res)
        res.send(m_res)
    })
    //console.log(req.query.id)

}

});

router.put('/', upload.single('file'), function(req, res, next) {

    if(req.cookies.org_id && req.file.buffer){
        if(req.body.filetype==="document"){
            minioClient.putObject('servelink', '/profile/organization/document/' + req.cookies.org_id + '.pdf', req.file.buffer, {'Content-Type': 'application/pdf'}, function (err, etag) {
                if (err)
                  console.log(err)
                else
                  console.log('File uploaded successfully.')
              })
        }else if(req.body.filetype==="profile"){
            minioClient.putObject('servelink', '/profile/organization/' + req.cookies.org_id + '.jpg', req.file.buffer, {}, function (err, etag) {
                if (err)
                  console.log(err)
                else
                  console.log('File uploaded successfully.')
              })
        }else if(req.body.filetype==="banner"){
            minioClient.putObject('servelink', '/profile/organization/banner/' + req.cookies.org_id + '.jpg', req.file.buffer, {}, function (err, etag) {
                if (err)
                  console.log(err)
                else
                  console.log('File uploaded successfully.')
              })
        }
        res.send("Success")
    }

});

router.post('/', function(req, res, next) {
    if(req.cookies.org_id && req.body.formData){
        organizationModel.findByIdAndUpdate(req.cookies.org_id,{
            about:req.body.formData.about,
            phone_no:req.body.formData.phone_no,
            zip_code:req.body.formData.zip_code,
        }).then((m_res)=>{
            res.send("success")
        })
    }
});

module.exports = router;