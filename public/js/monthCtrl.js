var app = angular.module('happyMod');


app.controller("monthController", function($scope, happyService) {
 	console.log("monthController has loaded");

	$scope.showEntry = function(day) {
		happyService.getPosts();
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


    //GET AVERAGE OF DAYS

    var test = [ [{rating: 8}, {rating: 8}], [{rating: 10}]]


    var average = 0;

    $scope.daySeperate.forEach(function(day){

      var total = 0;
      var length = 0;
          day.forEach(function(entry){
              total += entry.rating;
              length = day.length;
        });
        console.log(total);
        average = (total/length).toFixed(2);
        console.log(average);
        day.average = average;

    });



  });

    
   switch(day.cls){
       case day.average >= 1.5 && day.average < 2.5:
			day.cls = 'one';
           break;
		case day.average >= 1.5 && day.average < 2.5:
			day.cls = 'two'; 
           break;
        case day.average >= 2.5 && day.average < 3.5: 
			day.cls = 'three';
           break;
        case day.average >= 3.5 && day.average < 4.5: 
			day.cls = 'four';
           break;
        case day.average >= 4.5 && day.average < 5.5: 
			day.cls = 'five';
           break;
        case day.average >= 5.5 && day.average < 6.5: 
			day.cls = 'six';
           break;
        case day.average >= 6.5 && day.average < 7.5: 
			day.cls = 'seven';
           break;
        case day.average >= 7.5 && day.average < 8.5:
			day.cls = 'eight';
           break;
        case day.average >= 8.5 && day.average < 9.5:
			day.cls = 'nine';
           break;
        case day.average > 9.5:
			day.cls = 'ten';
           break;
        default: day.cls = 'none';
		}

    

});
