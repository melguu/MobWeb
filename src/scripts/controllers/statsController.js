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

                var arr = Object.keys(IdCountMap).map(function (key) {
                    return IdCountMap[key];
                });

                Math.max.apply(null, arr);

                $scope.MostCommented = Math.max.apply(null, arr);
            });

            ajaxFactory.loadAllComments().success(function (data) {
                $scope.comments = data.length;
            });

            ajaxFactory.countUsers().success(function (data) {
                $scope.usersRegistered = data.length;
            });


            ajaxFactory.loadAllMedia().success(function (response) {
                var countPerType = {all: 0, video: 0, audio: 0, image: 0};
                for (var i = 0; i < response.length; i++) {
                    countPerType[response[i].type] += 1;
                    countPerType.all += 1;
                }

                var typeCounts = countPerType;
                var counts = [typeCounts.image, typeCounts.video, typeCounts.audio];

                $scope.imageCount = typeCounts.all;

                $scope.labels = ["Images", "Videos", "Audio"];
                $scope.data = counts;
            });
        }]);