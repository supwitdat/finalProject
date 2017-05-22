var app = angular.module('happyMod');

app.controller("ratingController", function($scope, happyService) {
  console.log("ratingController has loaded");

  $scope.setRating  = function(rating) {
	  happyService.setRating(rating);
  };
	
});