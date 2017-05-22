var app = angular.module('happyMod');

app.factory("happyService", function($http) {
	console.log("happyService has loaded");
//	empty object for entry
	var entry = {};

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
	function getEntry() {
		return entry;
	}

	//object to be returned with function properties
	return {
		setRating: setRating,
		getRating: getRating,
		setComment: setComment,
		setMood: setMood,
		getEntry: getEntry
	}


});
