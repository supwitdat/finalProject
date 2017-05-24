var app = angular.module('happyMod');

app.factory("happyService", function($http) {
	console.log("happyService has loaded");
//	empty object for entry
	var entry = {};
    var holder={};
    var loginInfo={};
    var id =0;
	//sets number selected on rating page, adds it as property to entry object
	function setRating(rating) {
		entry.rating = rating;
		console.log(entry);
	};

	//returns entry object, including number rating
	function getRating() {
		return entry.rating;
	};

	//gets entry comment from entry page, adds it as property to entry object
	function setComment(comment) {
		entry.comment = comment;
		console.log(entry);
	};
	
//	gets entry mood from entry page, adds it as property to entry object
	function setMood(mood) {
		entry.mood = [];
		entry.mood = mood;
	};

	//returns entry object, including comment, mood, and rating
function getEntry(userID) {
        return $http.get('/api/posts/',userID ).then(function(response) {
            console.log(response);
			return response;
		})
	}
    
    function postEntry(entry){
        return $http.post('/api/posts/', entry).then(function(response){
            return response;
        });
    };
    
    
 function addUser(user) {
        // POST /api/user
    
		return $http.post('/api/users/', user).then(function(response) {
            console.log(response);
			return response;
		})
    };
    
    function userPromise (){
 var promise = $http.get('/api/users/').then(function(response){
    return response.data;
 });
        return promise;
    };

  
    function thisUser (username){
        var thisPromise = $http.get('/api/users/username/'+ username).then(function(response){
return response;
        });
        return thisPromise;
    };
    
    
     function myID(id){
         var userID = id;
         console.log(userID);
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
        console.log(loginInfo,'the info for login');
    }
    
    function getLogin(){
        return loginInfo;
    }
    
//    function getPassword(password){
//        return $http.get('/api/users/password/', password).then(function(response){
//            return response;
//        })
//    }
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
    
    
	//object to be returned with function properties
	return {
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
		getEntry: getEntry
	}


});
