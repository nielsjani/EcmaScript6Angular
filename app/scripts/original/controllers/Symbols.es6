angular
  .module('ecma6AngularApp')
  .controller('SymbolsCtrl', function ($scope) {

  let mySymbol = Symbol("My symbol");

  let someObject = { someProperty : 'Hello!'};
  someObject[mySymbol] = 'World!';

  $scope.scopeSymbol = someObject;
  $scope.symbolVal = someObject[mySymbol];
  let firstSymbol =Object.getOwnPropertySymbols(someObject)[0];
  $scope.symbolValUsingLookup = someObject[firstSymbol];
  });
