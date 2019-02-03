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
        // res.json(req.body);
        //this is where you do the loop to find best atch 
        //res with json back to ajax req
        // $.post(currentURL + "/api/friends", newFriend,function(data){
		// 	let bestFriend;
		// 		$.ajax({url: currentURL + "/api/friends", method: "GET"}).done(function(res){
                    
        
                let friend = req.body;
					let friendName = '';
					let friendImg = '';
                    let totalDifference = 50;;
                    let initialScore = '';
				for(let i = 0; i < friendData.length - 1; i++){
					let currentDifference = 0;
					for(let j = 0; j < friend.scores.length; j++){
						currentDifference += Math.abs(friendData[i].scores[j] - friend.scores[j]);
						
					}
					
					
					if(currentDifference < totalDifference && currentDifference > initialScore){
						 initialScore = currentDifference;
                         friendName = friendData[i].name;
                         friendImg = friendData[i].photo;
                         console.log(`${friendData[i].name}
${friendData[i].photo}`)
						
					}
					
					
                }
                friendData.push(req.body);
                res.json({status: 'ok', name: friendName, photo: friendImg});
            });
        
    };



//module.exports = apiRouter;