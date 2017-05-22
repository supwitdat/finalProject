var app = angular.module('happyMod');

app.factory("happyService", function($http) {
       this.getPost = function(itemId) {
  return $http.get('/api/posts/'+ itemId).then(function(response){

      return response;
  })
        // TODO Make the HTTP request to the server and return a promise.
    };
 return 
});
