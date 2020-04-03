/* an IIFE, an immediately invoked function expression
   we want to make sure that no local variables bleed
   into the global scope.
*/
(function(){
  'use strict';

var x = "hello";

angular.module('myFirstApp', [])

.controller('myFirstController', function ($scope){
/*anything with $ infront of a variable shows it's reserved for angular
  $scope is a special object facilitates sharing of
  data between the view model and the view
*/
$scope.name = "Evans";
$scope.sayHello = function(){
  return "Hello Coursera!";
}
});

})();
