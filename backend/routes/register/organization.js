var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
const { organizationModel } = require('../../database/db');
var crypto = require('crypto');
const multer = require('multer');
const storage = multer.memoryStorage(); // Store file data in memory
const upload = multer({ storage: storage });
const { minioClient } = require('../../database/bucket_storage')

router.post('/', function (req, res, next) {

    const organization_instance = new organizationModel(req.body);

                organization_instance.token = crypto.randomBytes(64).toString('hex');
                organization_instance.password = passwordHash.generate(req.body.password);

                organization_instance.save()
                    .then((mongo_res) => {
                        res.send({
                            name: mongo_res.name,
                            org_id: mongo_res._id,
                            token: mongo_res.token
                        })
                    }
                );

});

router.get('/', function(req, res, next) {
    if(req.cookies.org_id){

        organizationModel.findById(req.cookies.org_id)
            .select('name address district country phone_no zip_code')
            .then((m_res)=>{res.send(m_res)})

    }
    else{
        res.status(401)
        res.send("Not logged in")
    }
});

router.put('/',upload.single('file'), function(req, res, next) {
    if(req.cookies.token && req.cookies.org_id){

        //console.log("update:\n",req.body.formData)

        if (req.file) {

            var file=req.file.buffer

            minioClient.putObject('servelink', '/profile/organization/' + req.cookies.org_id + '.jpg', file, {}, function (err, etag) {
              if (err)
                console.log(err)
              else
                console.log('File uploaded successfully.')
            })
        }

        organizationModel.findByIdAndUpdate(req.cookies.org_id,req.body.formData)
        .then((mongo_res) => {
            res.send(req.body.formData)
        })

    }else{
        res.status(401)
        res.send("Not logged in")
    }

});
  


module.exports = router;