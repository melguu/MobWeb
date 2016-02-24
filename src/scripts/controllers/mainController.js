/**
 * Created by Artsi on 21/02/16.
 */
angular.module('kuveij')
    .controller('mainController', ['$scope', '$rootScope', 'AUTH_EVENTS', 'loginFactory',
        function ($scope, $rootScope, AUTH_EVENTS, loginFactory) {

            $scope.currentUser = undefined;

            $scope.setCurrentUser = function (user) {
                $scope.currentUser = user;
            };

            $rootScope.$on(AUTH_EVENTS.loginSuccess, function () {
                $scope.setCurrentUser(loginFactory.username());
            });

        }]);