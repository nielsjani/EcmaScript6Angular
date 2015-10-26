'use strict';

var _ImportMe = require("ImportMe");

angular.module('ecma6AngularApp').controller('ModuleCtrl', function ($scope) {

  $scope.imported = _ImportMe.aVar;
});
