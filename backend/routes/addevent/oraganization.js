const express=require("express");
var router = express.Router();
const bodyParser=require("body-parser");
const {addevent} = require('../../database/db');
const mongoose=require('mongoose');
const app=express();


const newEvent={
    name:"event5",
    location:"kottym",
    date:"2020-10-02"

};
addevent.insertMany([newEvent])


app.use(bodyParser.json());

// let events=[];

app.post('/',(req,res)=>{
    const {eventName,date,location}=req.body;
    addevent.insertMany([newEvent])
    app.use(bodyParser.json());
    // events.push(newEvent);
    // console.log(new_event);
    res.status(201).json({message:'Event registered succesfully',event:newevent});
});


module.exports=router;