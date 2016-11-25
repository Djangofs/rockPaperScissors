'use strict';

angular.module('rockPaperScissors')
  .controller('HomeViewCtrl', function($scope) {

    $scope.playerScore = 0;
    $scope.compScore = 0;

    //Function to increment player scores
    $scope.scoreCount = function(result) {

      if (result === "Player") {

        $scope.playerScore += 1;

      } else if (result === "Comp") {

        $scope.compScore += 1;

      }
    };

    //Function to reset both players scores to zero
    $scope.resetScore = function () {

      $scope.playerScore = 0;
      $scope.compScore = 0;

    };

});
