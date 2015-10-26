'use strict';

angular.module('ecma6AngularApp').controller('GeneratorCtrl', function ($scope) {
  var marked1$0 = [createIterator].map(regeneratorRuntime.mark);

  function createIterator(items) {
    var i;
    return regeneratorRuntime.wrap(function createIterator$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          i = 0;

        case 1:
          if (!(i < items.length)) {
            context$2$0.next = 7;
            break;
          }

          context$2$0.next = 4;
          return items[i];

        case 4:
          i++;
          context$2$0.next = 1;
          break;

        case 7:
        case 'end':
          return context$2$0.stop();
      }
    }, marked1$0[0], this);
  }

  var iterator = createIterator([1, 2, 3, 5, 8, 13, 21, 34]);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = iterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      $scope.iterated += " " + i;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});
