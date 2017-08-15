var friends = require('../data/friends.js');


//API Routes

module.exports = function (app){	
	app.get("/api/friends", function (req, res){	
		res.json(friends);

	});

	app.post('/api/friends', function (req, res){
		var newFriendScores = req.body;
		console.log(newFriendScores);
	    var scoresArray = [];
	    var bestMatch = 0;


	    //runs through all current friends in list
	    for(var i=0; i<friends.length; i++){
	    	
	    	var scoresDiff = 0;
	    	//run through scores to compare friends
	      	for(var j=0; j<newFriendScores.length; j++){
	    
	        	scoresDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendScores[j])));
	        	
	      	}

	      	//push results into scoresArray
	      	scoresArray.push(scoresDiff);
	      	
	    }

	    //after all friends are compared, find best match
	    for(var i=0; i<scoresArray.length; i++){

	      	if(scoresArray[i] <= scoresArray[bestMatch]){
	        	bestMatch = i;
	        }
	    }

	    //return bestMatch data
	    var match = friends[bestMatch];
	    console.log(match)
	    res.json(match);

	    //pushes new submission into the friendsList array
	    friends.push(req.body);
	    

	  });

};