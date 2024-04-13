const express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
// const mongoose = require('mongoose');
const multer = require('multer');
const uniqid = require('uniqid');
const { minioClient } = require('../../database/bucket_storage');
const { eventModel, organizationModel } = require('../../database/db');

const app = express();
// mongoose.connect("mongodb://localhost:27017/newdb")
//     .then(() => {
//         console.log("MongoDB connected successfully");
//     })
//     .catch((error) => {
//         console.error('Error connecting to MongoDB:', error);
//     });

// const addeventSchema = mongoose.Schema({
//     name: {
//         type: String,
//     },
//     location: {
//         type: String,
//     },
//     date: {
//         type: Date,
//     }
// });

// const Event = mongoose.model('Event', addeventSchema);
app.use(bodyParser.json());

// File upload configuration using multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define route handler for event registration with file upload
app.post('/', upload.single('file'), async (req, res, next) => {
    if (req.body.auth) {
        try {
            const org = await organizationModel.findOne(req.body.auth);
            if (!org) {
                return res.status(401).send("No Authorization");
            }
            
            const file = req.file.buffer;
            const event_instance = new eventModel(req.body.formData);
            event_instance.event_id = uniqid();
            event_instance.org_id = req.body.auth.org_id;

            const savedEvent = await event_instance.save();

            minioClient.putObject('servelink', '/event/' + savedEvent._id + '.jpg', file, {}, function (err, etag) {
                if (err) {
                    console.log(err);
                    return res.status(500).send("Error uploading file");
                } else {
                    console.log('File uploaded successfully.');
                    res.status(201).send('Event successfully registered');
                }
            });
        } catch (error) {
            console.error('Error registering event:', error);
            res.status(500).send("Failed to register event");
        }
    } else {
        res.status(401).send("No Authorization");
    }
});

// Define route handler for retrieving events
app.get('/', async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const events = await eventModel.find({ date: { $gte: today } });
        console.log('Retrieved events after today:', events);
        res.status(200).json(events);
    } catch (error) {
        console.error('Error retrieving events:', error);
        res.status(500).json({ message: 'Failed to retrieve events' });
    }
});

// const PORT = 3001;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

module.exports = router;
