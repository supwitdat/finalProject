var app = angular.module('happyMod');


app.controller("monthController", function($scope, happyService) {
 	console.log("monthController has loaded");
	
	happyService.setDays().then(function (days) {
		$scope.days = days;
	});
	
//	$scope.daySeperate = happyService.setDays();
//	
//	console.log($scope.daySeperate);
	

	//displays entries for specific day on page
	$scope.showEntry = function(day) {
		//makes sure that the entries include all recent posts
		happyService.getPosts();
		//assigns day clicked as the active day
		$scope.activeDay = day;
	}

});
