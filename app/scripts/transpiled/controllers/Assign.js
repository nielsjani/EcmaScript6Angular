'use strict';

angular.module('ecma6AngularApp').controller('AssignCtrl', function ($scope) {

  var toAssign = {
    doSomething: function doSomething() {
      return 'Hello globe';
    }
  };

  $scope.assignee = {};

  Object.assign($scope.assignee, toAssign);
});
