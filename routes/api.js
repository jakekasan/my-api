const express = require('express');
const router = express.Router();
const Object = require('../models/object');

router.get('/data',function(req,res){
  console.log("GET REQUEST");
  res.send({type:'GET'});
});

router.post('/data',function(req,res){
  console.log(req.body);
  Object.create(req.body).then(function(object){
    res.send(object);
  });
});

router.put('/data/:id',function(req,res){
  res.send({type:'PUT'});
});

router.delete('/data/:id',function(req,res){
  res.send({type:'DELETE'});
});

module.exports = router;
