const express = require('express');
const router = express.Router();
const Object = require('../models/object');

router.get('/data',function(req,res,next){
  console.log("Get request for '/data'");
  Object.aggregate().near({
    near: [parseFloat(req.query.lng),parseFloat(req.query.lat)],
    maxDistance: 100000,
    spherical: true,
    distanceField: "dist.calculated"
  }).then(function(objects){
    res.send(objects);
  })

});

router.post('/data',function(req,res,next){
  console.log(req.body);
  Object.create(req.body).then(function(object){
    res.send(object);
  }).catch(next);
});

router.put('/data/:id',function(req,res,next){
  Object.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
    Object.findOne({_id:req.params.id}).then(function(object){
      res.send(object);
    })
  })
  //res.send({type:'PUT'});

});

router.delete('/data/:id',function(req,res,next){
  //console.log(req.params.id);
  Object.findByIdAndRemove({_id:req.params.id}).then(function(object){
    res.send(object);
  });
  //res.send({type:'DELETE'});
});

module.exports = router;
