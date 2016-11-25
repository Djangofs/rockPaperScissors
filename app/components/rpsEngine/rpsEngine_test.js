"use strict";

describe("Directive: rpsEngine", function () {

  //Load the directive"s module
  beforeEach(module("rockPaperScissors"));
  beforeEach(module("rps.directives"));

  var element, scope, compile;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();

    compile = function () {
      element = angular.element("<rps-engine></rps-engine>");
      element = $compile(element)(scope);
      scope.$digest();
    };
  }));

  var badData = [{choice: "rock"}, ["rock"], 1, true, false];

  describe("Function: rpsChoose", function ()  {
    it("should be defined on load", function () {

      //Arrange
      compile();

      //Assert
      expect(scope.rpsChoose).toBeDefined();
    });

    it("should define compChoice", function() {

      //Arrange
      compile();

      //Act
      scope.rpsChoose();

      //Assert
      expect(scope.compChoice).toBeDefined()
    })
  });

  describe("Function: compareChoices", function () {
    it("should be defined on load", function () {

      //Arrange
      compile();

      //Assert
      expect(scope._compareChoices).toBeDefined()

    });

    it("should set result to undefined when bad data is passed to the function", function() {

      //Arrange
      compile();

      for (var i =0; i <= badData.length; i++) {
        //Act
        scope._compareChoices(badData[i]);

        //Assert
        expect(scope.result).toBe(undefined);
      }

    });

    it("should set result as draw when the choices are comp: rock, player: rock", function () {

      //Arrange
      compile();
      scope.compChoice = "rock";
      scope.playerChoice = "rock";

      //Act
      scope._compareChoices(scope.playerChoice);

      //Assert
      expect(scope.result).toBe("Draw");

    });

    it("should set result as draw when the choices are comp: paper, player: paper", function () {

      //Arrange
      compile();
      scope.compChoice = "paper";
      scope.playerChoice = "paper";

      //Act
      scope._compareChoices(scope.playerChoice);

      //Assert
      expect(scope.result).toBe("Draw");

    });

    it("should set result as draw when the choices are comp: scissors, player: scissors", function () {

      //Arrange
      compile();
      scope.compChoice = "scissors";
      scope.playerChoice = "scissors";

      //Act
      scope._compareChoices(scope.playerChoice);

      //Assert
      expect(scope.result).toBe("Draw");

    });

    it("should set result as player when the choices are comp: scissors, player: rock", function () {

      //Arrange
      compile();
      scope.compChoice = "scissors";
      scope.playerChoice = "rock";

      //Act
      scope._compareChoices(scope.playerChoice);

      //Assert
      expect(scope.result).toBe("Player");

    });

    it("should set result as comp when the choices are comp: paper, player: rock", function () {

      //Arrange
      compile();
      scope.compChoice = "paper";
      scope.playerChoice = "rock";

      //Act
      scope._compareChoices(scope.playerChoice);

      //Assert
      expect(scope.result).toBe("Comp");

    });

    it("should set result as player when the choices are comp: rock, player: paper", function () {

      //Arrange
      compile();
      scope.compChoice = "rock";
      scope.playerChoice = "paper";

      //Act
      scope._compareChoices(scope.playerChoice);

      //Assert
      expect(scope.result).toBe("Player");

    });

    it("should set result as comp when the choices are comp: scissors, player: paper", function () {

      //Arrange
      compile();
      scope.compChoice = "scissors";
      scope.playerChoice = "paper";

      //Act
      scope._compareChoices(scope.playerChoice);

      //Assert
      expect(scope.result).toBe("Comp");

    });

    it("should set result as player when the choices are comp: paper, player: scissors", function () {

      //Arrange
      compile();
      scope.compChoice = "paper";
      scope.playerChoice = "scissors";

      //Act
      scope._compareChoices(scope.playerChoice);

      //Assert
      expect(scope.result).toBe("Player");

    });

    it("should set result as comp when the choices are comp: rock, player: scissors", function () {

      //Arrange
      compile();
      scope.compChoice = "rock";
      scope.playerChoice = "scissors";

      //Act
      scope._compareChoices(scope.playerChoice);

      //Assert
      expect(scope.result).toBe("Comp");

    });
  });


});
