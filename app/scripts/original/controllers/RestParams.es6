angular
  .module('ecma6AngularApp')
  .controller('RestParamsCtrl', function ($scope) {

  $scope.result = '';
  $scope.restParams = function(what, ...things){
    let temp = 'Your momma likes to '+what + ' ';

    for (let i = 0, len = things.length; i < len; i++) {
      if(things[i]!== ''){
        temp+= things[i] + ' and ';
        }
    }
    $scope.result = temp;
  }

  let spreadExample = function(...stuff){
    $scope.spreadResult = 'Number of stuff passed: '+ stuff.length;
  }

  let stuff = [1,2,3,4,5,6];
  spreadExample(...stuff);

  });
