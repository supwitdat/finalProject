var app = angular.module('happyMod');

app.factory("happyService", function($http) {
	console.log("happyService has loaded");
    var nuUser = {}
	var entry = {};
    var holder={};
    var loginInfo={};
    var id =0;
//	var day = [];
//	var days = [];
    var allPosts=[];
    var today = [];
	var daysSeperate = [];

	//sets number selected on rating page, adds it as property to entry object
	function setRating(rating) {
		entry.rating = rating;
		//add class to each entry so the color appears on entry detail page
		if (entry.rating === 1) {
			entry.cls = "one";
		} else if (entry.rating === 2) {
			entry.cls = "two";
		} else if (entry.rating === 3) {
			entry.cls = "three";
		} else if (entry.rating === 4) {
			entry.cls = "four";
		} else if (entry.rating === 5) {
			entry.cls = "five";
		} else if (entry.rating === 6) {
			entry.cls = "six";
		} else if (entry.rating === 7) {
			entry.cls = "seven";
		} else if (entry.rating === 8) {
			entry.cls = "eight";
		} else if (entry.rating === 9) {
			entry.cls = "nine";
		} else if (entry.rating === 10) {
			entry.cls = "ten";
		} else {
			entry.cls = "none";
		}
	};

	//returns entry object, including number rating
	function getRating() {
		return entry.rating;
	};
	
	//returns entry object, including number class
	function getEntryClass() {
		return entry.cls;
	};

	//gets entry comment from entry page, adds it as property to entry object
	function setComment(comment) {
		entry.comment = comment;
	};
	
	//gets entry mood from entry page, adds it as property to entry object
	function setMood(mood) {
		entry.mood = [];
		entry.mood = mood;
        entry.mood = entry.mood.toString();
        console.log(entry);

	};

	//returns entry object, including comment, mood, and rating
	function getEntry(userID) {
        return $http.get('/api/posts/'+userID ).then(function(response) {
            console.log(response);
			return response;
		})
	}
            
	function postEntry(){
        $http({
           method:'POST',
           url:'/api/posts/entry/',
           data:{rating:entry.rating, mood:entry.mood, comment:entry.comment, userid:id}
       }).then(function(response){
           console.log(response.data);
       });
        };
	
	//get posts from database
	function getPosts(){
    	return $http.get('/api/posts/'+id).then(function(response){
    		allPosts = response.data;
      		console.log(allPosts);
			//return response
			return allPosts; 
		});
    };
	
	function setDays(){

		getPosts().then(function() {
			daysSeperate = [];
			var duplicates = [];
//			var daysSeperate = [];

			//creates duplicates array using posts dates
			allPosts.forEach(function(i) {
				duplicates.push(i.date);
			});

			//creates noDuplicates Array using filter and onlyUnique Function
			var noDuplicates = duplicates.filter(onlyUnique);

			function onlyUnique(value, index, self) {
				return self.indexOf(value) === index;
			}

			//outer forEach using noDuplicate array
			noDuplicates.forEach(function(i) {
				console.log(i);
				var date = i; 
				var oneDay = [];

				if(i !== date) {
					date = i;
				}

				//inner forEach using getPosts array
				allPosts.forEach(function(j) {
					if(j.date === date) {
						oneDay.push(j);
					}
				});
			daysSeperate.push(oneDay);	

			});

			console.log(daysSeperate);
			
			//Get Average of Days
			var average = 0;
			
			daysSeperate.forEach(function(day) {
				var total = 0;
				
				day.forEach(function(entry) {
					total += entry.rating;
				});
				average = (total/day.length).toFixed(2);
				console.log(average);
				day.average = average;
				
				//Add Class to each day
				
				if (day.average < 1.5) {
					day.cls = "one";
				} else if (day.average >= 1.5 && day.average < 2.5) {
					day.cls = "two";
				} else if (day.average >= 2.5 && day.average < 3.5) {
					day.cls = "three";
				} else if (day.average >= 3.5 && day.average < 4.5) {
					day.cls = "four";
				} else if (day.average >= 4.5 && day.average < 5.5) {
					day.cls = "five";
				} else if (day.average >= 5.5 && day.average < 6.5) {
					day.cls = "six";
				} else if (day.average >= 6.5 && day.average < 7.5) {
					day.cls = "seven";
				} else if (day.average >= 7.5 && day.average < 8.5) {
					day.cls = "eight";
				} else if (day.average >= 8.5 && day.average < 9.5) {
					day.cls = "nine";
				} else if (day.average >= 9.5) {
					day.cls = "ten";
				} else {
					day.cls = "none";
				}
			});
			return daysSeperate;
		});
	}
	
	function getDays() {
		return daysSeperate;
	}
	    
///////// USER INFORMATION AND LOGIN /////////////
	function addUser(user) {
		// POST /api/user

		return $http.post('/api/users/', user).then(function(response) {
            console.log(response);
			return response;
		})
	};  
    function thisUser (username){
        var thisPromise = $http.get('/api/users/username/'+ username).then(function(response){
return response;
        });
        return thisPromise;
    };
    
     function myID(id){
         var userID = id;
        return userID;
    }  
    
    function getID (){
        return id;
    };  
    
    function setUser (userObj){
         holder = userObj;
     };
    
    
    function getUser(){
        return holder;
    }
    
    function setLogin(existing){
        loginInfo = existing;
    }
    
    function getLogin(){
        return loginInfo;
    }
    
    function userLogin(username){
        console.log(username);
        return $http.get('/api/users/username/'+username).then(function(response){
            console.log(response);
            if (response.data.username === loginInfo.username && response.data.password === loginInfo.password){
                alert('Logged in as '+ response.data.username)
               return id = response.data.id;
            } else {
                alert('Login credentials do not match')
            }
        })
    }
function userPromise (){
		var promise = $http.get('/api/users/').then(function(response){
			return response.data;
		});
		return promise;
	};
    
	//object to be returned with function properties
	return {
        getPosts:getPosts,
        postEntry:postEntry,
        myID:myID,
        userLogin:userLogin,
        getLogin:getLogin,
        setLogin:setLogin,
        getUser:getUser,
        setUser:setUser,
        getID:getID,
        thisUser:thisUser,
        userPromise:userPromise,
        addUser:addUser,
		setRating: setRating,
		getRating: getRating,
		getEntryClass: getEntryClass,
		setComment: setComment,
		setMood: setMood,
		getEntry: getEntry,
		setDays: setDays,
		getDays: getDays
	}
});