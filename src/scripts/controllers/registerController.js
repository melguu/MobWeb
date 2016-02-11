angular.module('kuveij')
    .controller('registerController', function ($scope, ajaxFactory) {

        $scope.sendRegister = function () {

            var dataToRegister = {
                username: $scope.uname,
                password: $scope.pword,
                email: $scope.email
            };

            ajaxFactory.register(dataToRegister).success(function (data) {
                console.log(dataToRegister);
                $scope.registered = data;
            });
        };
    });