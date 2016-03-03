angular.module('kuveij')
    .controller('mediaController', ['$scope', '$sce', 'ajaxFactory', 'MediaService',
        function ($scope, $sce, ajaxFactory, MediaService) {
            $scope.perPage = 12;


            $scope.changeFileType = function (type) {
                if (typeof type === "undefined") {
                    ajaxFactory.loadAllMedia().success(function (response) {
                        $scope.files = response;
                    });
                } else {
                    ajaxFactory.loadSpecifiedMedia(type).success(function (response) {
                        $scope.files = response;
                        $scope.type = type;
                    });
                }
            };



            $scope.trustSrc = function (src) {
                return $sce.trustAsResourceUrl(MediaService.mediaUrl + src);
            };

            $scope.changeFileType();

        }]);