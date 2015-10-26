'use strict';

var _templateObject = _taggedTemplateLiteral(['', ' ate ', ' hamburgers today'], ['', ' ate ', ' hamburgers today']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

angular.module('ecma6AngularApp').controller('TemplateStringCtrl', function ($scope) {
  $scope.templatestringMultineLine = 'Hello\n    next line \nThird line';
  console.log($scope.templatestringMultineLine);

  var name = 'Your momma';
  var mealsPerDay = 4;
  var burgersPerMeal = 8;

  $scope.substitution = name + ' ate ' + mealsPerDay * burgersPerMeal + ' hamburgers today';
  $scope.template = swear(_templateObject, name, mealsPerDay * burgersPerMeal);

  function swear(literals) {
    var result = "";

    for (var _len = arguments.length, substitutions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      substitutions[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < substitutions.length; i++) {
      result += literals[i];
      result += substitutions[i] + ' fucking ';
    }
    result += literals[literals.length - 1];
    return result;
  }
});
