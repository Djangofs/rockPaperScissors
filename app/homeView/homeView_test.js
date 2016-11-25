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

  });
});
