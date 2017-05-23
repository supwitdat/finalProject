var app = angular.module('happyMod');

app.controller("loginController", function($scope, happyService) {

    $scope.addUser = function(user) {
        
        $scope.user = user;
        console.log($scope.user);
        
        happyService.userPromise().then(function(data){
            var match = false;
            data.forEach(function(index){
                if (index.username === $scope.user.name){
 return match = true; } 
                });
                         if (match === true){
                console.log('username taken')
            } else {
                happyService.addUser(user).then(function() {
        });
            };
            });
    };
         
        
     	
  
    
    
    });