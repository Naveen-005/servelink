var express = require('express');
var router = express.Router();
const {eventModel, organizationModel,VolunteerModel} = require('../database/db')

router.get('/', async function(req, res, next) {
    try {
        const orgCount = await organizationModel.countDocuments();
        const volCount = await VolunteerModel.countDocuments();
        const eventCount = await eventModel.countDocuments();

        var count = {
            org: orgCount,
            vol: volCount,
            events: eventCount
        };

        res.json(count);
    } catch (error) {

        next(error);
    }
});
module.exports = router;