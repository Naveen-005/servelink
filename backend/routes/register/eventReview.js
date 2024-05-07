var express = require('express');
var router = express.Router();
const { eventReviewModel,organizationModel,VolunteerModel,eventModel } = require('../../database/db');

router.get('/', async function (req, res, next) {
    try {
        //console.log("ID: ",req.query.id)
        const eventId = req.query.id;         
        const reviews = await eventReviewModel.find({ event_id: eventId });
        const volunteerPromises = reviews.map(async review => {
            const volunteer = await VolunteerModel.findById(review.vol_id);
            return {
                reviewMsg: review.reviewMsg,
                reviewRating: review.reviewRating,
                volunteer: volunteer ? {
                    first_name: volunteer.first_name,
                    last_name: volunteer.last_name
                } : null 
            };
        });

        const populatedReviews = await Promise.all(volunteerPromises);

        res.send(populatedReviews);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});



router.post('/', async function (req, res, next) {
    try {
        if (req.cookies.uid) {

            const existingReview = await eventReviewModel.findOne({
                vol_id: req.cookies.uid,
                event_id: req.body.event_id
            });

            if (existingReview) {

                existingReview.reviewMsg = req.body.reviewMsg;
                existingReview.reviewRating=req.body.reviewRating
                await existingReview.save();
                res.status(200).send('Review updated successfully');
            } else {

                const reviewInstance = new eventReviewModel({
                    vol_id: req.cookies.uid,
                    event_id: req.body.event_id,
                    reviewMsg: req.body.reviewMsg,
                    reviewRating: req.body.reviewRating
                });
                await reviewInstance.save();
                res.status(201).send('New review created successfully');
            }
        }else{
            res.status(401).send("please login")
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;