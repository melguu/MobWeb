angular.module('kuveij')
    .controller('UploadController', function ($scope, ajaxFactory) {
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

            request.then(function (response) {
                console.log(response.data);
            }, function (error) {
                console.log(error.data);
            });
        };
    });