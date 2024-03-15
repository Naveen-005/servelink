const mongoose = require('mongoose');
var config = require('./config.json');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.connect(config.mongodb_url)
  .then(() => console.log('Connected!'))
  .catch((err)=>{
    console.log("eroor: ",err)
  });

