/**
 * Created by Artsi on 21/02/16.
 */
angular.module('kuveij')
    .controller('mainController', function ($scope) {

        $scope.currentUser = null;

        $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
        };

    });