angular.module('kuveij')
    .controller('mediaController', function ($scope, $sce, ajaxFactory) {
        ajaxFactory.loadAllMedia().success(function (data) {
            $scope.files = data;
        });
    });
