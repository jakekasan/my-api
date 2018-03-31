const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//connect to MongoDB

mongoose.connect('mongodb://localhost/objectgo');
mongoose.Promise = global.Promise;

const app = express();

app.use(express.static("public"));

app.use(bodyParser.json());

//router
app.use('/api',routes);

// error handling
app.use(function(error,req,res,next){
  console.log(error);
  res.status(422).send({error: error.message});
});

app.listen(process.env.port || 9999,function(){
  console.log("Listening for requests at port 9999");
});
