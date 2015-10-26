'use strict';

angular.module('ecma6AngularApp').controller('SymbolsCtrl', function ($scope) {

  var mySymbol = Symbol("My symbol");

  var someObject = { someProperty: 'Hello!' };
  someObject[mySymbol] = 'World!';

  $scope.scopeSymbol = someObject;
  $scope.symbolVal = someObject[mySymbol];
  var firstSymbol = Object.getOwnPropertySymbols(someObject)[0];
  $scope.symbolValUsingLookup = someObject[firstSymbol];
});
