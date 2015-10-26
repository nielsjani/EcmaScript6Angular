angular
  .module('ecma6AngularApp')
  .controller('DefaultParamsCtrl', function ($scope) {

  $scope.result = '';
  $scope.defaultParamsFunction = function(male = 'Adam', female = 'Eve', generations = 7){
    $scope.result = 'The first couple on earth were '+male + ' and '+female + '. After '+generations+ ' generations they had populated the earth with '+ generations * generations + ' children.'
  }

  });
