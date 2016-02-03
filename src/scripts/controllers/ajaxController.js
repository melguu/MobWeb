angular.module('kuveij')
    .controller('ajaxController', function ($scope, ajaxService) {
        ajaxService.success(function (data) {
            $scope.files = data;
        });
    });
