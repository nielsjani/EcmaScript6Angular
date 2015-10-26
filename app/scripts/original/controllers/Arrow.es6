angular
  .module('ecma6AngularApp')
  .controller('ArrowCtrl', function ($scope) {

  $scope.sum = (a, b) => Number.parseInt(a)+Number.parseInt(b);
  $scope.multiply = (a,b) => {
    if(a>0 && b>0){
      return a*b;
    }
    return -1;
  }
  });
