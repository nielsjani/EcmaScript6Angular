'use strict';

/**
 * @ngdoc overview
 * @name ecma6AngularApp
 * @description
 * # ecma6AngularApp
 *
 * Main module of the application.
 */
angular
  .module('ecma6AngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/basics', {
        templateUrl: 'views/basics/basics.html'
      })
      .when('/basics/stringFunctions', {
        templateUrl: 'views/basics/stringFunctions.html',
        controller:'StringFunctionsCtrl'
      })
      .when('/basics/hoisting', {
        templateUrl: 'views/basics/hoisting.html',
        controller:'HoistingCtrl'
      })
      .when('/basics/destructuring', {
        templateUrl: 'views/basics/destructuring.html',
        controller:'DestructuringCtrl'
      })
      .when('/basics/numbers', {
        templateUrl: 'views/basics/numbers.html',
        controller:'NumbersCtrl'
      })
      .when('/functions', {
        templateUrl: 'views/functions/functions.html'
      })
      .when('/functions/defaultparams', {
        templateUrl: 'views/functions/defaultparams.html',
        controller:'DefaultParamsCtrl'
      })
      .when('/functions/restparams', {
        templateUrl: 'views/functions/restparams.html',
        controller:'RestParamsCtrl'
      })
      .when('/functions/arrow', {
        templateUrl: 'views/functions/arrow.html',
        controller:'ArrowCtrl'
      })
      .when('/objects', {
        templateUrl: 'views/objects/objects.html'
      })
      .when('/objects/literal', {
        templateUrl: 'views/objects/literal.html',
        controller: 'LiteralCtrl'
      })
      .when('/objects/assign', {
        templateUrl: 'views/objects/assign.html',
        controller: 'AssignCtrl'
      })
     .when('/objects/setproto', {
          templateUrl: 'views/objects/setproto.html',
          controller: 'SetProtoCtrl'
        })
      .when('/symbols', {
            templateUrl: 'views/symbols/symbols.html',
            controller: 'SymbolsCtrl'
          })
      .when('/classes', {
            templateUrl: 'views/classes/classes.html',
            controller: 'ClassCtrl'
          })
      .when('/generators', {
        templateUrl: 'views/GeneratorsIterators/generators.html',
        controller: 'GeneratorCtrl'
      })
      .when('/modules', {
        templateUrl: 'views/modules/modules.html',
        controller: 'ModuleCtrl'
      })
      .when('/templatestrings', {
        templateUrl: 'views/templatestrings/templatestrings.html',
        controller: 'TemplateStringCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
