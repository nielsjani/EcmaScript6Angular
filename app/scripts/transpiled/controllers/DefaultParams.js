'use strict';

angular.module('ecma6AngularApp').controller('DefaultParamsCtrl', function ($scope) {

  $scope.result = '';
  $scope.defaultParamsFunction = function () {
    var male = arguments.length <= 0 || arguments[0] === undefined ? 'Adam' : arguments[0];
    var female = arguments.length <= 1 || arguments[1] === undefined ? 'Eve' : arguments[1];
    var generations = arguments.length <= 2 || arguments[2] === undefined ? 7 : arguments[2];

    $scope.result = 'The first couple on earth were ' + male + ' and ' + female + '. After ' + generations + ' generations they had populated the earth with ' + generations * generations + ' children.';
  };
});
