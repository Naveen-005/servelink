const express=require("express");
var router = express.Router();
const bodyParser=require("body-parser");
const {addevent} = require('../../database/db')

const app=express();


app.use(bodyParser.json());

// let events=[];

app.post('/',(req,res)=>{
    const newevent = new addevent(req.body);

    

    // events.push(newEvent);
    // console.log(new_event);
    res.status(201).json({message:'Event registered succesfully',event:newevent});
});

// const PORT=3000;
// app.listen(PORT,()=>{
//     console.log(`server is running on port ${PORT}`);
// });
module.exports=router;