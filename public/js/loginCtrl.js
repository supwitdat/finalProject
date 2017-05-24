var app = angular.module('happyMod');

app.controller("loginController", function($scope, happyService,$location) {
    $scope.user ={};
    $scope.existing ={};

    
    $scope.addUser = function(user) {
        console.log($scope.user);
        //adds login form values to an object//
        happyService.setUser($scope.user);

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
                    happyService.myID(data.data.id);;})
                   $location.path('/entry');

            });
            }
    });
         
  
    };
    
    $scope.login = function(){
        happyService.setLogin($scope.existing);
        happyService.userLogin($scope.existing.username).then(function(){
            $location.path('/entry');
        });
    };
});