'use strict';

angular.module('ecma6AngularApp').controller('ArrowCtrl', function ($scope) {

  $scope.sum = function (a, b) {
    return Number.parseInt(a) + Number.parseInt(b);
  };
  $scope.multiply = function (a, b) {
    if (a > 0 && b > 0) {
      return a * b;
    }
    return -1;
  };
});
