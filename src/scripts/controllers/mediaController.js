angular.module('kuveij')
    .controller('mediaController', function ($scope, ajaxFactory, $routeParams) {
        var id = $routeParams.id;

        ajaxFactory.loadAllMedia().success(function (data) {
            $scope.files = data;
        });

        ajaxFactory.loadOneMedia(id).success(function (data) {
                $scope.files = data;
        });

    });
