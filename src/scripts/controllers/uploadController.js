angular.module('kuveij')
    .controller('uploadController', function ($scope, ajaxFactory) {
        $scope.setMediaFile = function (element) {
            $scope.mimeType = element.files[0].type;
            $scope.type = $scope.mimeType.substr(0,5);
        };

        $scope.sendImage = function () {
            var fd = new FormData(document.getElementById('fileForm'));
            fd.append('user', 6);
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
            var username = "6";
        ajaxFactory.loadUserMedia(username).success(function (data) {
            $scope.files = data;
        });
    });