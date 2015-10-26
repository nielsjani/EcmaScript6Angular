'use strict';

angular.module('ecma6AngularApp').controller('NumbersCtrl', function ($scope) {

  var MAX_INTEGER = Number.MAX_SAFE_INTEGER;
  var MIN_INTEGER = Number.MIN_SAFE_INTEGER;
  $scope.max = MAX_INTEGER;
  $scope.min = MIN_INTEGER;

  $scope.binaryToParse = '0b101010';
  $scope.octagonalToParse = '0o52';

  $scope.result = '?';
  $scope.parse = function (number) {
    $scope.result = Number(number);
  };

  $scope.isInteger = function (number) {
    return Number.isInteger(number);
  };

  $scope.isSafeInteger = function (number) {
    return Number.isSafeInteger(number);
  };
});
