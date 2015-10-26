angular
  .module('ecma6AngularApp')
  .controller('LiteralCtrl', function ($scope) {

  $scope.shorthandResult = (age, sex, location) => ($scope.result =
    {
    age, sex, location, doStuff(){return age + location + 'oeloboelo';}
    });

  });
