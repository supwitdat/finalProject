var app = angular.module('happyMod');

app.controller("loginController", function($scope, happyService,$location) {
    $scope.addUser = function(user) {
        //adds login form values to an object//
        $scope.user = user;
        console.log($scope.user);
        // this uses a promise located in our factory to  get all users in the database, then a foreach loop is ran on the array of users and if they match, it prompts user that the username is taken. if not taken, the registration goes through//
happyService.userPromise().then(function(data){
    
            var match = false;
    
            data.forEach(function(index){
                
                if (index.username === $scope.user.name){
 
                    return match = true; } 

                });
                if (match === true){
                     alert('Username Taken');         
                } else {
        happyService.addUser(user).then(function(data){
                 //this bit here gets the person who we just made, and grabs their ID to be posted to the page.//
            happyService.thisUser(data.config.data.name).then(function(data){
                     console.log(data.data.id) });
                   $location.path('/entry');

            });
            };
    });
         
  
    }
    });

