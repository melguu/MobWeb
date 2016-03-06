angular.module('kuveij')
    .controller('uploadController', ['$scope', 'ajaxFactory', 'loginFactory', 'AUTH_EVENTS', '$rootScope',
        function ($scope, ajaxFactory, loginFactory, AUTH_EVENTS, $rootScope) {

            if (!loginFactory.isAuthenticated()) {
                $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            }

            $scope.setMediaFile = function (element) {
                $scope.mimeType = element.files[0].type;
                $scope.type = $scope.mimeType.substr(0, 5);
            };

            $scope.sendImage = function () {
                var fd = new FormData(document.getElementById('fileForm'));
                fd.append('user', loginFactory.userId());
                fd.append('type', $scope.type);
                fd.append('mime-type', $scope.mimeType);

                var request = ajaxFactory.uploadFile(fd);
                $scope.upload = "";

                request.then(function (response) {
                    $scope.upload = "Media uploaded";
                }, function (error) {
                    $scope.upload = "Media upload failed";
                });
            };

            $scope.loadMyImages = function () {
                if (loginFactory.isAuthenticated()) {
                    ajaxFactory.loadUserMedia(loginFactory.userId()).success(function (data) {
                        $scope.files = data;
                    });
                }
            };

            $scope.loadFavorites = function () {
                if (loginFactory.isAuthenticated()) {
                    ajaxFactory.loadFavorites(loginFactory.userId()).success(function (data) {
                        $scope.files = data;
                    });
                }
            };
        }]);