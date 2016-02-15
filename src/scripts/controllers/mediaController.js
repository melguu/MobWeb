angular.module('kuveij')
    .controller('mediaController', function ($scope, $sce, ajaxFactory, MediaService) {
        ajaxFactory.loadAllMedia().success(function (data) {
            $scope.files = data;
        });
        $scope.trustSrc = function (src) {
            return $sce.trustAsResourceUrl(MediaService.mediaUrl + src);
        };
    });