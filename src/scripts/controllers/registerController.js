angular.module('kuveij')
    .controller('registerController', ['$scope', 'ajaxFactory',
        function ($scope, ajaxFactory) {

            $scope.sendRegister = function () {

                var dataToRegister = {
                    username: $scope.uname,
                    password: $scope.pword,
                    email: $scope.email
                };

                ajaxFactory.register(dataToRegister).success(function (data) {
                    $scope.registered = data;
                });
            };
        }]);