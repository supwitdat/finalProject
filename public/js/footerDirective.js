var app = angular.module('happyMod');

app.directive('footer',function(){

  return{
    restrict:'AE',
    template: '<div class="foot"><p>The <span class="progressTeam">progress.</span> team:</p><p><a href="https://github.com/chelkweber">Chelsea Weber</a>  |  <a href="https://github.com/supwitdat">Brian Barnes</a>  |  <a href="http://github.com/Lawson812/">James Lawson</a>  |  <a href="https://github.com/nathan-rabens">Nathan Rabens</a></p><p>copyright © 2017 <i>All The Feels</i></p></div>'
  }


});
