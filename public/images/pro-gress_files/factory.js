var app = angular.module('happyMod');

app.factory("happyService", function($http) {
	var entry = {};
    var holder={};
    var loginInfo={};
    var id =498;
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

	};

	//returns entry object, including comment, mood, and rating
	function getEntry(userID) {
        return $http.get('/db/posts/'+userID ).then(function(response) {
			return response;
		})
	}

	function postEntry(){
    var promise =  $http({
           method:'POST',
           url:'/db/posts/entry/',
           data:{rating:entry.rating, mood:entry.mood, comment:entry.comment, userid:id}
       }).then(function(response){
       });
		return promise;
        };

	//get posts from database
	function getPosts(){
    	return $http.get('/db/posts/'+id).then(function(response){
    		allPosts = response.data;
			allPosts.forEach(function(entry) {
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
			});
			//return response
			return allPosts;
		});
    };

	function setDays(){

		var promise = getPosts().then(function() {
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


			//Get Average of Days
			var average = 0;


			daysSeperate.forEach(function(day) {
				var total = 0;

				day.forEach(function(entry) {
					day.date = entry.date
					total += entry.rating;
				});
				average = (total/day.length).toFixed(2);
				day.average = average;
				day.date = day[0].date;
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

		return promise;
	}

	function getDays() {
        return daysSeperate;
    }

	function setDisplayPosts(selectedDay) {
		var days = getDays();
		var day = {posts: []};
		for(i=0; i < days.length; i++){
			if(selectedDay.substring(0,10) === days[i].date.substring(0,10)){
				day.newAvg = days[i].average;
				//ADDS CLASS TO DISPLAY COLOR ON CALENDER DAY BASED ON DAY AVERAGE
				if (day.newAvg < 1.5) {
					day.cls = "one";
				} else if (day.newAvg >= 1.5 && day.newAvg < 2.5) {
					day.cls = "two";
				} else if (day.newAvg >= 2.5 && day.newAvg < 3.5) {
					day.cls = "three";
				} else if (day.newAvg >= 3.5 && day.newAvg < 4.5) {
					day.cls = "four";
				} else if (day.newAvg >= 4.5 && day.newAvg < 5.5) {
					day.cls = "five";
				} else if (day.newAvg >= 5.5 && day.newAvg < 6.5) {
					day.cls = "six";
				} else if (day.newAvg >= 6.5 && day.newAvg < 7.5) {
					day.cls = "seven";
				} else if (day.newAvg >= 7.5 && day.newAvg < 8.5) {
					day.cls = "eight";
				} else if (day.newAvg >= 8.5 && day.newAvg < 9.5) {
					day.cls = "nine";
				} else if (day.newAvg >= 9.5) {
					day.cls = "ten";
				} else {
					day.cls = "none";
				}

				days[i].forEach(function(post){
					var postObj = {};
					postObj.mood = post.mood;
					postObj.comment = post.comment;
					postObj.rating = post.rating;
					postObj.date = post.date;
					//ADDS CLASS TO DISPLAY COLOR ON ENTRY DAY BASED ON ENTRY RATING
					if (post.rating === 1) {
						postObj.cls = "one";
					} else if (post.rating === 2) {
						postObj.cls = "two";
					} else if (post.rating === 3) {
						postObj.cls = "three";
					} else if (post.rating === 4) {
						postObj.cls = "four";
					} else if (post.rating === 5) {
						postObj.cls = "five";
					} else if (post.rating === 6) {
						postObj.cls = "six";
					} else if (post.rating === 7) {
						postObj.cls = "seven";
					} else if (post.rating === 8) {
						postObj.cls = "eight";
					} else if (post.rating === 9) {
						postObj.cls = "nine";
					} else if (post.rating === 10) {
						postObj.cls = "ten";
					} else {
						postObj.cls = "none";
					}
					day.posts.push(postObj);

				});

			}
		}
    
		return day;
	}

///////// USER INFORMATION AND LOGIN /////////////
	function addUser(user) {

		return $http.post('/db/users/', user).then(function(response) {
			return response;
		})
	};

    function thisUser (username){
        var thisPromise = $http.get('/db/users/username/'+ username).then(function(response){
return response;
        });
        return thisPromise;
    };


     function myID(newId){
         id = newId;
        return id;
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
        return $http.get('/db/users/username/'+username).then(function(response){ var match;
            if (response.data.username === loginInfo.username && response.data.password === loginInfo.password){
               return id = response.data.id;
            } else {
                alert('Login credentials do not match');
            }
        })
    }
function userPromise (){
		var promise = $http.get('/db/users/').then(function(response){
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
		getDays: getDays,
		setDisplayPosts: setDisplayPosts
	}
});
