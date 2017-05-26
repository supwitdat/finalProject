var app = angular.module('happyMod');


app.controller("monthController", function($scope, happyService, $timeout) {
 	console.log("monthController has loaded");
	
//	happyService.setDays().then(function (days) {
//		$scope.test = happyService.getDays();
//		console.log($scope.test);
//		$scope.days = days;
//		console.log($scope.days);
//	});
	
	happyService.setDays();
	$timeout(function() {
		$scope.days = happyService.getDays();
		console.log($scope.days);
	}, 2000);
//	$scope.days = happyService.getDays();
//	console.log($scope.days);
//	
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
