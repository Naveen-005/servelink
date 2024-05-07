var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
const { VolunteerModel } = require('../../database/db');
//const {generateUsername} = require("unique-username-generator");
var crypto = require('crypto');
//var uniqid = require('uniqid');
const { minioClient } = require('../../database/bucket_storage')
//var uniqid = require('uniqid');
const multer = require('multer');
const storage = multer.memoryStorage(); // Store file data in memory
const upload = multer({ storage: storage });

/*
function uid_generator(name){
    var username = generateUsername("-", 4, 20, name);
    return VolunteerModel.findOne({uid: username})
        .then((q_res)=>{
            if(!q_res){
                return username;
            } else {
                return uid_generator(name);
            }
        });
}
*/

router.post('/',upload.single('file'), function (req, res, next) {

    const volunteer_instance = new VolunteerModel(req.body.formData);
    //console.log(req.file)

    VolunteerModel.findOne({ $or: [{ 'email': req.body.formData.email }, { 'phone_no': req.body.formData.phone_no }] })
        .then((q_res) => {

            if (!q_res) {

                volunteer_instance.token = crypto.randomBytes(64).toString('hex');
                volunteer_instance.password = passwordHash.generate(req.body.formData.password);
                volunteer_instance.save()
                    .then((mongo_res) => {
                        if (req.file?.buffer) {

                            var file = req.file.buffer

                            minioClient.putObject('servelink', '/profile/volunteer/' + mongo_res._id + '.jpg', file, {}, function (err, etag) {
                              if (err)
                                console.log(err)
                              else
                                console.log('File uploaded successfully.')
                            })
                        }
                        res.send({
                            name: mongo_res.first_name,
                            uid: mongo_res._id,
                            token: mongo_res.token
                        })
                    }
                )
                .catch((er)=>{
                    res.status(500).send("Unable to register user")
                })


            }
            else {
                res.status(409)
                res.send('Email or phone number already registered');
            }
        });

});


module.exports = router;