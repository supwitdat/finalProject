var app = angular.module('happyMod');


app.controller("monthController", function($scope, happyService) {
 	console.log("monthController has loaded");

	$scope.days = happyService.getDays();
	
	$scope.showEntry = function(day) {
		$scope.activeDay = day;	
	}
	
	$scope.hideEntry = function() {
		$scope.activeDay = "";
	}
    
    $scope.getPosts = happyService.getPosts();

});
