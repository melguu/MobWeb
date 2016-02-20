/**
 * Created by Artsi on 04/02/16.
 */
angular.module('kuveij')
    .controller('loginController', function ($scope, loginFactory) {

        $scope.showModal = false;
        $scope.toggleModal = function(){
            $scope.showModal = !$scope.showModal;
        };

        $scope.sendLogin = function(){

            var dataToLogin = {
                username: $scope.uname,
                password: $scope.pword
            };
            console.log(dataToLogin);

           loginFactory.login(dataToLogin).success(function (data) {
                console.log(data);
                $scope.logged = data;
            });
        };
    });