var app = angular.module('happyMod');

app.factory("happyService", function($http) {
	console.log("happyService has loaded");

	var entry = {};
    var holder={};
    var loginInfo={};
    var id =0;
	var day = [];
	var days = [];
    var allPosts=[];
    var today = []
	//sets number selected on rating page, adds it as property to entry object
	function setRating(rating) {
		entry.rating = rating;
	};

	//returns entry object, including number rating
	function getRating() {
		return entry.rating;
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
	
	//adds entries to day array
	//TODO associate entry with a day, based on date input
	function setDay() {
		day.push(entry);
		//get average rating for day
		var dayTotal = 0;
		var dayAvg = 0;
		day.forEach(function(entry) {
			dayTotal += entry.rating;
		})
		dayAvg = dayTotal/day.length;
		//add class to day based on average rating
		day.rating = dayAvg;
		if (day.rating === 1) {
			day.cls = 'one';
		} else if (day.rating === 2) {
			day.cls = 'two'; 
		} else if (day.rating === 3) {
			day.cls = 'three'
		} else if (day.rating === 4) {
			day.cls = 'four';
		} else if (day.rating === 5) {
			day.cls = 'five';
		} else if (day.rating === 6) {
			day.cls = 'six';
		} else if (day.rating === 7) {
			day.cls = 'seven';
		} else if (day.rating === 8) {
			day.cls = 'eight';
		} else if (day.rating === 9) {
			day.cls = 'nine';
		} else if (day.rating === 10) {
			day.cls = 'ten';
		} else {
			day.cls = 'none';
		}
	}
	
	//adds day to days array
	function setDays() {
		days.push(day);
		console.log(day);
	}
	
	//get days array to access entries and days
	function getDays() {
		return days; 
		console.log(days);
	}
    
//User Info	
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
    
function getPosts(){
    return $http.get('/api/posts/'+id).then(function(response){
        for(i=0;i<response.data.length;i++){
            if (response.data[i].date === response.data[i].date){
                allPosts = response.data[i];
                console.log(allPosts);
            }
        }
        allPosts = response.data
      console.log(allPosts);
        return response });
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
		setComment: setComment,
		setMood: setMood,
		getEntry: getEntry,
		setDay: setDay,
		setDays: setDays,
		getDays: getDays
	}
});