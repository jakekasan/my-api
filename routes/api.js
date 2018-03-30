const express = require('express');
const router = express.Router();

router.get('/data',function(req,res){
  res.send({type:'GET'});
});

router.post('/data',function(req,res){
  console.log(req.body);
  res.send({
    type:'POST',
    name:req.body.name,
    rank:req.body.rank
  });
});

router.put('/data/:id',function(req,res){
  res.send({type:'PUT'});
});

router.delete('/data/:id',function(req,res){
  res.send({type:'DELETE'});
});

module.exports = router;
