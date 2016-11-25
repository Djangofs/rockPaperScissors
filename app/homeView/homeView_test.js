'use strict';

describe('Controller: HomeViewController', function() {

  beforeEach(module('rockPaperScissors'));

  var HomeViewCtrl, scope;

  beforeEach(inject(function ($controller, $rootScope) {

    scope = $rootScope.$new();

    HomeViewCtrl = $controller('HomeViewCtrl', {
      $scope: scope
    });

  }));

  describe('When controller initialises', function(){

    it('should be defined', function() {

      //Assert
      expect(HomeViewCtrl).toBeDefined();
    });

    it('should define player and computer score', function() {

      //Assert
      expect(scope.playerScore).toBeDefined();
      expect(scope.compScore).toBeDefined();
    });

    it('should define scoreCount and resetScore functions', function() {

      //Assert
      expect(scope.scoreCount).toBeDefined();
      expect(scope.resetScore).toBeDefined();
    });
  });

  describe('Function: scoreCount', function() {

    it('should increment player score when called with Player', function() {

      //Arrange
      scope.playerScore = 0;
      scope.compScore = 0;
      var result = "Player";

      //Act
      scope.scoreCount(result);

      //Assert
      expect(scope.playerScore).toBe(1);
      expect(scope.compScore).toBe(0);

    });

    it('should increment player score when called with Comp', function() {

      //Arrange
      scope.playerScore = 0;
      scope.compScore = 0;
      var result = "Comp";

      //Act
      scope.scoreCount(result);

      //Assert
      expect(scope.playerScore).toBe(0);
      expect(scope.compScore).toBe(1);

    });
  });

  describe('Function: resetScore', function() {

    it('should set playerScore and compScore to 0 when called', function() {

      //Arrange
      scope.playerScore = 20;
      scope.compScore = 15;

      //Act
      scope.resetScore();

      //Assert
      expect(scope.playerScore).toBe(0);
      expect(scope.compScore).toBe(0);

    })

  });
});
