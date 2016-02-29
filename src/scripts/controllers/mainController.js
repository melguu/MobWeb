/**
 * Created by Artsi on 21/02/16.
 */
angular.module('kuveij')
    .controller('mainController', ['$scope', '$rootScope', 'AUTH_EVENTS', 'loginFactory', 'localStorageService',
        function ($scope, $rootScope, AUTH_EVENTS, loginFactory, localStorageService) {

            $scope.currentUser = loginFactory.getUsername(localStorageService.get("userId"));

            $scope.setCurrentUser = function (user) {
                $scope.currentUser = user;
            };

            $rootScope.$on(AUTH_EVENTS.loginSuccess, function () {
                $scope.setCurrentUser(loginFactory.username());
            });

            $rootScope.$on(AUTH_EVENTS.logoutSuccess, function () {
                $scope.setCurrentUser(loginFactory.username());
            });

        }]);