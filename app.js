(function(){
  'use strict';

  angular.module('myFirstApp', [])

  .controller('myFirstController', function($scope){
    $scope.name="Evans";
    $scope.sayHello = function(){
      return "Hello World";
    }
  });
})();

(function(){
  'use strict';

  var x = "Hello";

  angular.module('trials', [])

  .controller('firstController', function($scope){
    $scope.name = "Evans";
    $scope.sayHello = function(){
      return x;
    }
  });
})();

(function(){
  'use strict';

  angular.module('NameCalculator', [])

  .controller('NameCalculatorController', function($scope){
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNumeric = function(){
      var totalNameValue = calculateNumericForString($scope.name); //gets the total value
      $scope.totalValue = totalNameValue;
    };

    function calculateNumericForString(string){
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++){
        totalStringValue += string.charCodeAt(i);
      }

      return totalStringValue;
    }
  });
})();
