var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter_Volunteer = require('./routes/login/volunteer');
var loginRouter_Organization = require('./routes/login/organization');
var volunteerRegistration_Router=require('./routes/register/volunteer');
var organizationRegistration_Router=require('./routes/register/organization');
var eventRegistration_Router=require('./routes/register/event')
var eventDetailsRouter=require('./routes/event_details');
var orgEventGetter=require('./routes/organization/event');
var orgProfileRouter=require('./routes/organization/profile');
var changepasswordRouter=require('./routes/changePassword');
var otpVerifier=require('./routes/otpVerify');
var volunteerListRouter=require('./routes/volunteerList');
var MessageRouter=require('./routes/message');

var locationGetter=require('./routes/eventcoordinates');
var volnameGetter=require('./routes/volunteername');
var historyfinder=require('./routes/eventhistory');
var org_verfier=require('./routes/admin/org_verify');
var counter=require('./routes/count');


var app = express();

var db = require('./database/db')
//var bucket=require('./database/bucket_storage')
app.use(cors({
    origin: 'http://localhost:3200',
    credentials:true}));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login/volunteer',loginRouter_Volunteer);
app.use('/login/organization',loginRouter_Organization);
app.use('/register/volunteer',volunteerRegistration_Router);
app.use('/register/organization',organizationRegistration_Router);
app.use('/register/event',eventRegistration_Router);
app.use('/event_details',eventDetailsRouter);
app.use('/org/event', orgEventGetter);
app.use('/profile/organization',orgProfileRouter);
app.use('/changePassword',changepasswordRouter);
app.use('/otpVerify',otpVerifier);
app.use('/event/volunteerList',volunteerListRouter);
app.use('/message',MessageRouter);

app.use('/event/location',locationGetter);
app.use('/login/voluntername',volnameGetter);
app.use('/event/history',historyfinder);
app.use('/admin/org_verify',org_verfier);
app.use('/count',counter);


module.exports = app;
