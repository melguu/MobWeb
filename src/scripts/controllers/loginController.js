/**
 * Created by Artsi on 04/02/16.
 */
angular.module('kuveij')
    .controller('loginController', ['$scope', 'loginFactory',
        function ($scope, loginFactory) {
            $scope.credentials = {
                username: '',
                password: ''
            };

            $scope.login = function () {
                loginFactory.login($scope.credentials);
            };

        }]);