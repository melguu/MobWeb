angular.module('kuveij')
    .controller('mediaController', function ($scope, ajaxFactory) {

        ajaxFactory.loadAllMedia().success(function (data) {
            $scope.files = data;
        });

    });
