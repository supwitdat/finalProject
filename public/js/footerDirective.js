var app = angular.module('happyMod');

app.directive('footer',function(){

  return{
    restrict:'AE',
    template:   '<div class="foot text-center"><p>The <span class="progressTeam">progress.</span> team:</p><p> <a href="https://github.com/supwitdat">Brian Barnes</a> | <a href="http://github.com/Lawson812/">James Lawson</a>  |   <a href="https://github.com/nathan-rabens">Nathan Rabens</a> | <a href="https://github.com/chelkweber">Chelsea Weber</a></p></div>'
  }
});
