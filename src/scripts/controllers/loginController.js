/**
 * Created by Artsi on 04/02/16.
 */
angular.module('kuveij')
    .controller('loginController', ['$scope', 'loginFactory', '$rootScope', 'AUTH_EVENTS',
        function ($scope, loginFactory, $rootScope, AUTH_EVENTS) {
            $scope.credentials = {
                username: '',
                password: ''
            };

            $scope.login = function () {
                loginFactory.login($scope.credentials);
            };

            $rootScope.$on(AUTH_EVENTS.loginFailed, function () {
                $scope.logged_in = "Login failed, please try again.";
            });

        }]);