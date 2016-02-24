/**
 * Created by Artsi on 04/02/16.
 */
angular.module('kuveij')
    .controller('loginController', function ($scope, $rootScope, loginFactory) {
        $scope.credentials = {
            username: '',
            password: ''
        };

        $scope.login = function (){
            loginFactory.login($scope.credentials);
        }

    });