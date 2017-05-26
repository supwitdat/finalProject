var app = angular.module('happyMod');


app.controller("monthController", function($scope, happyService, $timeout) {
 	console.log("monthController has loaded");
	
	happyService.setDays();
	$timeout(function() {
		$scope.days = happyService.getDays();
		console.log($scope.days);
	}, 1000);
	
	//displays entries for specific day on page
	$scope.showEntry = function(day) {
		//makes sure that the entries include all recent posts
		happyService.getPosts();
		//assigns day clicked as the active day
		$scope.activeDay = day;
	}

});
