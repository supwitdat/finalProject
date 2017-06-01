var app = angular.module('happyMod');

app.controller("ratingController", function($scope, happyService) {

  $scope.setRating  = function(rating) {
	  happyService.setRating(rating);
  };
	
});