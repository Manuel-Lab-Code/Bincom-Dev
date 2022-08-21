(function () {

'use strict';

angular.module("myApp", [])

.controller("MsgController",  MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
    $scope.name = "Emmanuel";
    // code to access the images for the angry kid
    $scope.stateofBeing = "angry";

    $scope.sayMessage = function () {
        return "Manuel Wants to be friend!";
        
    };
    // code to access the images for the happy kid
    $scope.feedManuel = function () {
      $scope.stateofBeing = "happy";
      
    };
}

})();