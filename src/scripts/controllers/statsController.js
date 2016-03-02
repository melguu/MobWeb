/**
 * Created by Artsi on 01/03/16.
 */
angular.module('kuveij')
    .controller('statsController', ['$scope', 'ajaxFactory',
        function ($scope, ajaxFactory) {

            ajaxFactory.loadAllComments().success(function (response) {
                var IdCountMap = {};
                for (var i = 0; i < response.length; i++) {
                    if (IdCountMap[response[i].fileId]) {
                        IdCountMap[response[i].fileId] += 1;
                    } else {
                        IdCountMap[response[i].fileId] = 1;
                    }
                }

                console.log(max(IdCountMap));

                return $scope.MostCommented = IdCountMap;
            });

            ajaxFactory.loadAllComments().success(function (data) {
                return $scope.comments = data.length;
            });

            ajaxFactory.loadAllComments().success(function (data) {
                return $scope.comments = data.length;
            });

            ajaxFactory.countImages().success(function (data) {
                return $scope.imageCount = data.length;
            });

            ajaxFactory.countUsers().success(function (data) {
                return $scope.usersRegistered = data.length;
            });

        }]);