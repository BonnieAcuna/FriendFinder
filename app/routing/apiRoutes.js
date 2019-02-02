const friendData = require("../data/friends");
// const express = require('express');
// const apiRouter = express.Router()
// apiRouter.get("/friends", function(req, res) {
//              res.json(friendData);
//            });
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
      });
    
      app.post("/api/friends", function(req, res) {
        console.log(req.body);
        res.json(req.body);
        
        
    });

};

//module.exports = apiRouter;