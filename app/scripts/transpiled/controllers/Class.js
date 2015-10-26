'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

angular.module('ecma6AngularApp').controller('ClassCtrl', function ($scope) {

  //equivalent of Java's Abstract class in ES6

  var AbstractClass = function AbstractClass() {
    _classCallCheck(this, AbstractClass);

    //    new.target does not work yet with Babel, this.constuctor works just as well
    if (this.constructor === AbstractClass) {
      throw new Error("Dont make abstractclasses, dumbo");
    }
  };

  var MyClass = (function (_AbstractClass) {
    _inherits(MyClass, _AbstractClass);

    function MyClass(part, partToo, partTrie) {
      _classCallCheck(this, MyClass);

      _get(Object.getPrototypeOf(MyClass.prototype), 'constructor', this).call(this);
      this.part = part;
      this.partToo = partToo;
      this.partFor = partToo + partTrie;
    }

    _createClass(MyClass, [{
      key: 'gimmeParts',
      value: function gimmeParts() {
        return this.part * this.partToo - this.partFor;
      }
    }, {
      key: 'getPart',

      //getter and setter cause stackoverflows if done the ES6 way. Babel error?
      value: function getPart() {
        return this.part;
      }
    }, {
      key: 'setPart',
      value: function setPart(value) {
        if (this.part !== value) {
          this.part = value;
        }
      }
    }], [{
      key: 'combineparts',
      value: function combineparts(part, another) {
        return part + another;
      }
    }]);

    return MyClass;
  })(AbstractClass);

  $scope.somePart = new MyClass(3, 2, 1);
  $scope.somePart.setPart(15);
  $scope.partValue = $scope.somePart.getPart();
  $scope.staticCall = MyClass.combineparts("Yo momma", " so fat");

  var AnotherClass = (function (_MyClass) {
    _inherits(AnotherClass, _MyClass);

    function AnotherClass(part, partToo) {
      _classCallCheck(this, AnotherClass);

      _get(Object.getPrototypeOf(AnotherClass.prototype), 'constructor', this).call(this, part, partToo, partToo);
    }

    _createClass(AnotherClass, [{
      key: 'gimmeParts',
      value: function gimmeParts() {
        return "#SubClassVersionOfGimmePartsIsBetter" + _get(Object.getPrototypeOf(AnotherClass.prototype), 'gimmeParts', this).call(this);
      }
    }]);

    return AnotherClass;
  })(MyClass);

  $scope.anotherClass = new AnotherClass(5, 2);
  $scope.staticSubclassCall = AnotherClass.combineparts("Yo momma", " so fat");

  //Will throw error defined in AbstractClass
  //  $scope.abstractClass = new AbstractClass();
});
