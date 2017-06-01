var app = angular.module('happyMod');

app.directive('footer',function(){

  return{
    restrict:'AE',
    template:   '<div class="foot text-center"><p>The <span class="progressTeam">progress.</span> team:</p><p> <a href="https://github.com/supwitdat" target="_blank">Brian Barnes</a> | <a href="http://github.com/Lawson812/" target="_blank">James Lawson</a>  |   <a href="https://github.com/nathan-rabens" target="_blank">Nathan Rabens</a> | <a href="https://github.com/chelkweber" target="_blank">Chelsea Weber</a></p></div>'
  }
});