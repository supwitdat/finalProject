var app = angular.module('happyMod');


app.controller("monthController", function($scope, happyService) {
 	console.log("monthController has loaded");

	$scope.days = happyService.getDays();

	console.log($scope.days);
});
