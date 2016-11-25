"use strict";


 //Directive to drive the RPS game logic
angular.module("rockPaperScissors")
  .directive("rpsEngine", function () {
    return {
      templateUrl: "components/rpsEngine/rpsEngine.html",
      link: function (scope) {

        scope.playerChoice = "";

        //Function to simulate computer choosing rock paper or scissors.
        scope.rpsChoose = function() {

          //Set up choices array and pick random index between 0 and 2.
          var rpsChoices = ["rock", "paper", "scissors"];
          scope.compChoice = rpsChoices[Math.floor((Math.random() * 3))];

          if (scope.playerChoice) {

            scope._compareChoices(scope.playerChoice);

          }

        };

        //Function to compare compChoice and playerChoice, in order to decide who wins. Prefixed with underscore to
        //indicate "private" function, i.e. exposed for unit testing but not to be called from HTML
        scope._compareChoices = function(playerChoice) {

          //Prevent function being called with bad data
          if (typeof playerChoice === "string") {

            //Check first if result is Draw
            if (playerChoice === scope.compChoice) {

              scope.result = "Draw";

            } else if (playerChoice === "rock") {

              if (scope.compChoice === "paper") {

                scope.result = "Comp"

              } else if (scope.compChoice === "scissors") {

                scope.result = "Player"

              }
            }

            else if (playerChoice === "paper") {

              if (scope.compChoice === "scissors") {

                scope.result = "Comp"

              } else if (scope.compChoice === "rock") {

                scope.result = "Player"

              }
            }

            else if (playerChoice === "scissors") {

              if (scope.compChoice === "rock") {

                scope.result = "Comp"

              } else if (scope.compChoice === "paper") {

                scope.result = "Player"

              }
            }

          } else {

            scope.result = undefined;

          }

        }

      }
    };
  });
