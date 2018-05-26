var express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req,res){
    burger.getAll(function(burgers){
        var hbsObject = {
            burgers: burgers,
        };
        res.render("index",hbsObject);
    });    
});

router.post("/api/burgers", function(req, res){
    burger.create(["burger_name","devoured"],[req.body.name, false],function(result){
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req,res){
    burger.update({devoured: true,},`id=${req.params.id}`,function(result){
      if(result.changedRows === 0){
          res.status(404).end();
      }else{
          res.status(200).end();
      } 
    });
});

module.exports = router;