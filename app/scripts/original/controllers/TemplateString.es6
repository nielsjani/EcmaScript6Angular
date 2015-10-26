angular
  .module('ecma6AngularApp')
  .controller('TemplateStringCtrl', function ($scope) {
    $scope.templatestringMultineLine = `Hello
    next line \nThird line`;
    console.log($scope.templatestringMultineLine);

    let name = 'Your momma';
    let mealsPerDay = 4;
    let burgersPerMeal = 8;

    $scope.substitution = `${name} ate ${mealsPerDay * burgersPerMeal} hamburgers today`;
    $scope.template = swear`${name} ate ${mealsPerDay * burgersPerMeal} hamburgers today`;


    function swear(literals, ...substitutions){
      let result = "";

      for (let i = 0; i < substitutions.length; i++) {
      result += literals[i];
      result += substitutions[i] + ' fucking ';
      }
      result += literals[literals.length - 1];
      return result;

    }
  });
