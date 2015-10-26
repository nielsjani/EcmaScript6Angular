angular
  .module('ecma6AngularApp')
  .controller('StringFunctionsCtrl', function ($scope) {

  $scope.title = 'Stringfunctions';

   $scope.includesWord1 = '';
   $scope.includesMatch1 = '';
   $scope.doesIncludeAnswer = '?';

   $scope.includesIndex = 0;
   $scope.doesIncludeWithIndexAnswer = 0;
   $scope.doesIncludeWithIndex = function(index){
     $scope.doesIncludeWithIndexAnswer = $scope.includesWord1.includes($scope.includesMatch1, index);
   }

   $scope.doesStartWithAnswer = '?';
   $scope.doesStartWithWithIndex = function(index){
    $scope.doesStartWithAnswer = $scope.includesWord1.startsWith($scope.includesMatch1, index);
   }

    $scope.doesEndWithAnswer = '?';
    $scope.doesEndWithWithIndex = function(index){
     $scope.doesEndWithAnswer = $scope.includesWord1.endsWith($scope.includesMatch1, index);
    }

    $scope.repeats = 0;
    $scope.repeatedWord = "";
    $scope.repeat = function(){
      $scope.repeatedWord = $scope.includesWord1.repeat($scope.repeats);
    }
  });
