var app = angular.module('happyMod');

app.config(function($routeProvider){

  $routeProvider.when('/entry', {

    templateUrl: "rating-view.html",
    controller: "ratingController"
  }).when('/month', {

    templateUrl: "month-view.html",
    controller: "monthController"

  }).when('/entry-detail', {

    templateUrl: "entry-page-detail.html",
    controller: "entryController"

  }).when('/login',{
      templateUrl: 'login.html',
      controller: "loginController"
  })
  .otherwise({
    redirectTo: 'login'
  });
});
