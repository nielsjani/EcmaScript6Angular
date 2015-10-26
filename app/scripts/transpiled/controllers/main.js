'use strict';

/**
 * @ngdoc function
 * @name ecma6AngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ecma6AngularApp
 */
angular.module('ecma6AngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
