angular
  .module('ecma6AngularApp')
  .controller('SetProtoCtrl', function ($scope) {

  let x = {
    foo() {
      return 'Foo!';
    },
    fooMore(){
      return 'FooMore';
    }
  }

  let y = {
    bar(){
      return 'Bar!';
    }
  }

  let z = {
    __proto__: x,
    fooMore(){
      return super.fooMore()+ ' , baby!';
    }
  }

  Object.setPrototypeOf(y, x);

  $scope.newProto = y;
  $scope.newSuper = z;

   });
