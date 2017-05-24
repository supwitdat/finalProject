var app = angular.module('happyMod');

app.controller("entryController", function($scope, happyService) {
  console.log("entryController has loaded");
	//displays rating for entry page
	$scope.rating = happyService.getRating();
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
		console.log($scope.selection);
  	};

	//sends comment and mood selection info to entry object in factory
	$scope.setEntry = function(comment, mood) {
		happyService.setComment(comment);
		mood = $scope.selection;
		happyService.setMood(mood);
	};

  $scope.deleteRestart = function() {
      console.log('delete');
      $scope.selection = [];
  };

});
