"use strict";

/**
 * Directive to display addresses on the account page
 */
angular.module("rockPaperScissors")
  .directive("rpsEngine", function () {
    return {
      templateUrl: "components/rpsEngine/rpsEngine.html",
      link: function (scope) {

        scope.rpsChoose = function(playerChoice) {

        }

      }
    };
  });
