var app = angular.module('happyMod');


app.controller("entryController", function($scope, happyService, $location) {
  console.log("entryController has loaded");

	//displays rating for entry page
	$scope.rating = happyService.getRating();

	//set class for number
	$scope.cls = happyService.getEntryClass();


	// Moods
//  	// Moods
//  	$scope.moods = [
//'anxious','angry','confident','content','calm','embarrassed','depressed','excited','grateful','happy','hopeful','indifferent','lonely','pessimistic','restless','satisfied'];

	
	$scope.moods = [
		{
			name: 'anxious',
			level: 'low',
			cls: 'low'
		},
		{
			name: 'angry',
			level: 'low',
			cls: 'low'
		},
		{
			name: 'confident',
			level: 'high',
			cls: 'high'
		},
		{
			name: 'content',
			level: 'middle',
			cls: 'middle'
		},
		{
			name: 'calm',
			level: 'middle',
			cls: 'middle'
		},
		{
			name: 'embarrassed',
			level: 'low',
			cls: 'low'
		},
		{
			name: 'depressed',
			level: 'low',
			cls: 'low'
		},
		{
			name: 'excited',
			level: 'high',
			cls: 'high'
		},
		{
			name: 'grateful',
			level: 'high',
			cls: 'high'
		},
		{
			name: 'happy',
			level: 'high',
			cls: 'high'
		},
		{
			name: 'hopeful',
			level: 'high',
			cls: 'high'
		},
		{
			name: 'indifferent',
			level: 'middle',
			cls: 'middle'
		},
		{
			name: 'lonely',
			level: 'low',
			cls: 'low'
		},
		{
			name: 'pessimistic',
			level: 'low',
			cls: 'low'
		},
		{
			name: 'restless',
			level: 'middle',
			cls: 'middle'
		},
		{
			name: 'satisfied',
			level: 'high',
			cls: 'high'
		}
	];


  	// Selected Moods from list
  	$scope.selection = [];

  	// Toggle selection for a given mood
  	$scope.toggleSelection = function toggleSelection(mood) {
		var idx = $scope.selection.indexOf(mood.name);

		// Is currently selected
		if (idx > -1) {
		  $scope.selection.splice(idx, 1);
		} else {
		  $scope.selection.push(mood.name);
		}
		console.log($scope.selection);
  	};

	//sends comment and mood selection info to entry object in factory
	$scope.setEntry = function(comment, mood) {
		happyService.setComment(comment);
		mood = $scope.selection;
		happyService.setMood(mood);
<<<<<<< HEAD
        happyService.postEntry();
=======
//		happyService.setDay();
//		happyService.setDays();
        happyService.postEntry().then(function(){

         $location.path('/month');


        });




>>>>>>> 21bb4339d697803542354aff4d621352e7cc6f27
	};

  $scope.deleteRestart = function() {
      $scope.selection = [];
  };

});
