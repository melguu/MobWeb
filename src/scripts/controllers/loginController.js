/**
 * Created by Artsi on 04/02/16.
 */
angular.module('kuveij')
    .controller('loginController', function ($scope, ajaxFactory) {

        $scope.sendLogin = function () {

            var dataToLogin = {
                username: $scope.uname,
                password: $scope.pword
            };

            ajaxFactory.login(dataToLogin).success(function (data) {
                console.log(dataToLogin);
                $scope.logged = data;
            });
        };
    });