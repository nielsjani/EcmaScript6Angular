'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

angular.module('ecma6AngularApp').controller('DestructuringCtrl', function ($scope) {

  var someObject = { anInt: 5, aChar: 'a', anArray: ['badger', 'mushroom', 'African snake'] };

  var destrInt = someObject.anInt;
  var destrChar = someObject.aChar;

  var _someObject$anArray = _slicedToArray(someObject.anArray, 2);

  var destrBadger = _someObject$anArray[0];
  var destrMushroom = _someObject$anArray[1];

  $scope.destructured = destrInt + destrChar + destrBadger;

  //recommended to always provide default values for destructured function args
  var someFunction = function someFunction(regularArg, _ref) {
    var destrArg1 = _ref.destrArg1;
    var destrArg2 = _ref.destrArg2;
    var destrArg3 = _ref.destrArg3;

    $scope.destructuredFunction = regularArg + destrArg1 + destrArg2;
  };

  someFunction(5, { destrArg1: 'a', destrArg2: 'badger' });
});
