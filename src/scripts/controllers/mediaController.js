angular.module('kuveij')
    .controller('mediaController', ['$scope', '$sce', 'ajaxFactory', 'MediaService',
        function ($scope, $sce, ajaxFactory, MediaService) {
            $scope.fileType = undefined;


            if($scope.fileType == undefined){
                ajaxFactory.loadAllMedia().success(function (response) {
                    $scope.files = response;
                });
            }else{
                ajaxFactory.loadSpecifiedMedia(fileType).success(function (response){
                    $scope.files = response;
                });
            }


            $scope.itemsPerPage = 12;
            $scope.currentPage = 0;
            $scope.total = $scope.files.length;
            $scope.pagedFiles = $scope.files.slice($scope.currentPage * $scope.itemsPerPage,
                $scope.currentPage * $scope.itemsPerPage + $scope.itemsPerPage);

            $scope.loadMore = function () {
                $scope.currentPage++;
                var newItems = $scope.files.slice($scope.currentPage * $scope.itemsPerPage,
                    $scope.currentPage * $scope.itemsPerPage + $scope.itemsPerPage);
                $scope.pagedFiles = $scope.pagedFiles.concat(newItems);
            };

            $scope.nextPageDisabledClass = function () {
                return $scope.currentPage === $scope.pageCount() - 1 ? "disabled" : "";
            };

            $scope.pageCount = function () {
                return Math.ceil($scope.total / $scope.itemsPerPage);
            };

            $scope.trustSrc = function (src) {
                return $sce.trustAsResourceUrl(MediaService.mediaUrl + src);
            };

        }]);