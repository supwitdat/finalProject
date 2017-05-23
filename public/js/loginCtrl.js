var app = angular.module('happyMod');

app.controller("loginController", function($scope, loginFactory) {

  //EVENTUALLY SEND USER INFO TO HOLDER
    loginFactory.storeUserInfo(/*info to send set here as param*/);
       
});
