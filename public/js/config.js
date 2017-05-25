var app = angular.module('happyMod');

app.config(function($routeProvider){

  $routeProvider.when('/entry', {

    templateUrl: "/views/rating-view.html",
    controller: "ratingController"
  }).when('/month', {

    templateUrl: "/views/month-view.html",
    controller: "monthController"

  }).when('/entry-detail', {

    templateUrl: "/views/entry-page-detail.html",
    controller: "entryController"

  }).when('/login',{
      templateUrl: '/views/login.html',
      controller: "loginController"

  }).when('/', {
      templateUrl: 'views/splash.html'
  })
  .otherwise({
    redirectTo: 'views/splash.html'
  });
});
