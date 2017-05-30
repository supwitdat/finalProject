var app = angular.module('happyMod');

app.controller("entryController", function($scope, happyService) {
	//displays rating for entry page
	$scope.rating = happyService.getRating();
	
	//set class for number
	$scope.cls = happyService.getEntryClass();
	
	
	// Moods
  	$scope.moods = ['anxious', 'angry', 'content', 'calm', 'depressed', 'excited', 'grateful', 'hopeful', 'indifferent', 'lonely', 'pessimistic', 'restless'];

  	// Selected Moods from list
  	$scope.selection = [];

  	// Toggle selection for a given mood
  	$scope.toggleSelection = function toggleSelection(mood) {
		var idx = $scope.selection.indexOf(mood);

		// Is currently selected
		if (idx > -1) {
		  $scope.selection.splice(idx, 1);
		} else {
		  $scope.selection.push(mood);
		}
  	};

	//sends comment and mood selection info to entry object in factory
	$scope.setEntry = function(comment, mood) {
		happyService.setComment(comment);
		mood = $scope.selection;
		happyService.setMood(mood);
//		happyService.setDay();
//		happyService.setDays();
        happyService.postEntry();
	};

  $scope.deleteRestart = function() {
      $scope.selection = [];
  };

});
