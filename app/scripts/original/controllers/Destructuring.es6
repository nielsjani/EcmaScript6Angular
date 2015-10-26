angular
  .module('ecma6AngularApp')
  .controller('DestructuringCtrl', function ($scope) {

  let someObject = {anInt:5, aChar:'a', anArray:['badger', 'mushroom', 'African snake']};

  let { anInt : destrInt,
        aChar: destrChar,
        anArray : [destrBadger, destrMushroom] }
          = someObject;

  $scope.destructured = destrInt + destrChar + destrBadger;

  //recommended to always provide default values for destructured function args
  let someFunction = function(regularArg, {destrArg1, destrArg2, destrArg3}){
    $scope.destructuredFunction = regularArg + destrArg1+destrArg2;
  }

  someFunction(5,{destrArg1:'a', destrArg2:'badger'});

  });
