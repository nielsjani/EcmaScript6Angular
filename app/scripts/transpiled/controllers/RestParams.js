'use strict';

angular.module('ecma6AngularApp').controller('RestParamsCtrl', function ($scope) {

  $scope.result = '';
  $scope.restParams = function (what) {
    var temp = 'Your momma likes to ' + what + ' ';

    for (var _len = arguments.length, things = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      things[_key - 1] = arguments[_key];
    }

    for (var i = 0, len = things.length; i < len; i++) {
      if (things[i] !== '') {
        temp += things[i] + ' and ';
      }
    }
    $scope.result = temp;
  };

  var spreadExample = function spreadExample() {
    for (var _len2 = arguments.length, stuff = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      stuff[_key2] = arguments[_key2];
    }

    $scope.spreadResult = 'Number of stuff passed: ' + stuff.length;
  };

  var stuff = [1, 2, 3, 4, 5, 6];
  spreadExample.apply(undefined, stuff);
});
