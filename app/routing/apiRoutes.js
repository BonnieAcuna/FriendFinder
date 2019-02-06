const friendData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
      });
    
      app.post("/api/friends", function(req, res) {
        console.log(req.body);
        
        
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



