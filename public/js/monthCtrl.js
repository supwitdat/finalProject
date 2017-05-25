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

  happyService.getPosts().then(function(posts) {


    var duplicates = [];
    $scope.daySeperate = [];

    //creates duplicates array using posts dates
   posts.data.forEach(function(i){
         duplicates.push(i.date);
    });


  // creates noDuplicates Array using filter and onlyUnique Function
  var noDuplicates = duplicates.filter(onlyUnique);

  function onlyUnique(value, index, self) {
          return self.indexOf(value) === index;
      }


  //Outer forEach using noDuplicate array
  noDuplicates.forEach(function(i){
    console.log(i);
    var date = i;
    var oneDay = [];

    if(i !== date){
      date = i;
  }

  //Inner forEach using getPosts array
        posts.data.forEach(function(j){

           if(j.date === date){
             oneDay.push(j);
           }
        });

  // pushes array of one days worth of posts into larger array
          $scope.daySeperate.push(oneDay);

  });

  console.log($scope.daySeperate);

  });



});
