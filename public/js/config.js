var app = angular.module('happyMod');

app.config(function($routeProvider){

  $routeProvider.when('/entry', {

    templateUrl: "entry-view.html",
    controller: "entryController"
  })

  $routeProvider.when('/month', {

    templateUrl: "month-view.html",
    controller: "monthController"

  })

  $routeProvider.when('/entry-detail', {

    templateUrl: "entry-page-detail.html",
    controller: "entryController"

  });
});
