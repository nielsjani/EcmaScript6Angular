import { aVar} from "ImportMe";

angular
  .module('ecma6AngularApp')
  .controller('ModuleCtrl', function ($scope) {

  $scope.imported = aVar;

  });
