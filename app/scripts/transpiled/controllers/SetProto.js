'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

angular.module('ecma6AngularApp').controller('SetProtoCtrl', function ($scope) {
  var _obj;

  var x = {
    foo: function foo() {
      return 'Foo!';
    },
    fooMore: function fooMore() {
      return 'FooMore';
    }
  };

  var y = {
    bar: function bar() {
      return 'Bar!';
    }
  };

  var z = _obj = {
    __proto__: x,
    fooMore: function fooMore() {
      return _get(Object.getPrototypeOf(_obj), 'fooMore', this).call(this) + ' , baby!';
    }
  };

  Object.setPrototypeOf(y, x);

  $scope.newProto = y;
  $scope.newSuper = z;
});
