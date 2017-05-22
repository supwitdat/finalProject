var app = angular.module('happyMod');

app.controller("entryController", function($scope, happyService) {
  console.log("entryController has loaded");

	$scope.rating = happyService.getRating();
	
	$scope.setEntry = function(comment, mood) {
		happyService.setEntry(comment);
		console.log(mood);
	}
	
});
