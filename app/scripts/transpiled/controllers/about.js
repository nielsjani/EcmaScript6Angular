'use strict';

/**
 * @ngdoc function
 * @name ecma6AngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ecma6AngularApp
 */
angular.module('ecma6AngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
