angular
  .module('ecma6AngularApp')
  .controller('ClassCtrl', function ($scope) {

//equivalent of Java's Abstract class in ES6
  class AbstractClass {
    constructor(){
//    new.target does not work yet with Babel, this.constuctor works just as well
      if(this.constructor === AbstractClass){
        throw new Error("Dont make abstractclasses, dumbo");
      }
    }
  }

  class MyClass extends AbstractClass{
    constructor(part, partToo, partTrie){
      super();
      this.part = part;
      this.partToo = partToo;
      this.partFor = partToo + partTrie;
    }

    gimmeParts() {
    return (this.part * this.partToo) - this.partFor;
    };

//getter and setter cause stackoverflows if done the ES6 way. Babel error?
    getPart(){
      return this.part;
    }

    setPart(value){
    if(this.part!== value){
      this.part = value;
      }
    }

    static combineparts(part, another){
      return part+another;
    }
  }

  $scope.somePart = new MyClass(3,2,1);
  $scope.somePart.setPart(15);
  $scope.partValue=$scope.somePart.getPart();
  $scope.staticCall = MyClass.combineparts("Yo momma", " so fat");

  class AnotherClass extends MyClass {
    constructor(part, partToo){
      super(part, partToo, partToo);
    }

    gimmeParts() {
     return "#SubClassVersionOfGimmePartsIsBetter" + super.gimmeParts();
    }

  }

  $scope.anotherClass = new AnotherClass(5,2);
  $scope.staticSubclassCall = AnotherClass.combineparts("Yo momma", " so fat");

//Will throw error defined in AbstractClass
//  $scope.abstractClass = new AbstractClass();

  });
