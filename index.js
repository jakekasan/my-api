const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//connect to MongoDB

mongoose.connect('mongodb://localhost/objectgo')

const app = express();

app.use(bodyParser.json());

app.use('/api',routes);

app.listen(process.env.port || 9999,function(){
  console.log("Listening for requests at port 9999");
});
