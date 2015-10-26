'use strict';

angular.module('ecma6AngularApp').controller('LiteralCtrl', function ($scope) {

  $scope.shorthandResult = function (age, sex, location) {
    return $scope.result = {
      age: age, sex: sex, location: location, doStuff: function doStuff() {
        return age + location + 'oeloboelo';
      }
    };
  };
});
