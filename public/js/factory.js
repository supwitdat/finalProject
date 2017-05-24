var app = angular.module('happyMod');

app.factory("happyService", function($http) {
	console.log("happyService has loaded");

	var entry = {};
	var day = [];
	var days = [];
		
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
		entry.moods = [];
		entry.moods = mood;
	};

	//returns entry object, including comment, mood, and rating
	function getEntry() {
		return entry;
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
    
	//object to be returned with function properties
	return {
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
