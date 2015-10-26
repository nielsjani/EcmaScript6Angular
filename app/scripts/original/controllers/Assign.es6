angular
  .module('ecma6AngularApp')
  .controller('AssignCtrl', function ($scope) {

  let toAssign = {
    doSomething() {return 'Hello globe';}
  };

  $scope.assignee = {};

  Object.assign($scope.assignee, toAssign);
  });
