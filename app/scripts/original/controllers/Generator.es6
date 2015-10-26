angular
  .module('ecma6AngularApp')
  .controller('GeneratorCtrl', function ($scope) {

    function *createIterator(items){

      for(let i=0; i<items.length; i++){
        yield items[i];
       }
      }

    let iterator = createIterator([1,2,3,5,8,13,21,34]);
    for(let i of iterator){
      $scope.iterated += " "+i;
    }



  });
