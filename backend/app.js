var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter_Volunteer = require('./routes/login/volunteer');
var loginRouter_Organization = require('./routes/login/organization');
var volunteerRegistration_Router=require('./routes/register/volunteer');
var organizationRegistration_Router=require('./routes/register/organization');
var user_event_add_Router=require('./routes/addevent/oraganization');

var app = express();

var test = require('./database/db')

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login/volunteer',loginRouter_Volunteer);
//app.use('/login/organization',loginRouter_Organization);
app.use('/register/volunteer',volunteerRegistration_Router);
//app.use('/register/organization',organizationRegistration_Router);


module.exports = app;
