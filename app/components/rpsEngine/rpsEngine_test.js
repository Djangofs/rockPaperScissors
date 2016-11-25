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

  describe("Function: rpsChoose", function ()  {
    it("should be defined on load", function () {

      //Arrange
      compile();

      //Assert
      expect(scope.rpsChoose).toBeDefined();
    });
  });


});
