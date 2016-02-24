/**
 * Created by Artsi on 04/02/16.
 */
angular.module('kuveij')
    .controller('loginController', function ($scope, $rootScope, loginFactory, AUTH_EVENTS) {
        var userId = null;

        $scope.showModal = false;
        $scope.toggleModal = function () {
            $scope.showModal = !$scope.showModal;
        };

        $scope.credentials = {
            username: '',
            password: ''
        };

        $scope.login = function (credentials) {
            loginFactory.login(credentials).then(function (user) {
                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                    userId = user;
                    return userId;
                }, function () {
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                });
            loginFactory.getUsername(userId).success(function (username) {
                $scope.setCurrentUser(username.username);
            });

        };

    });