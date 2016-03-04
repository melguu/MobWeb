/**
 * Created by Artsi on 01/03/16.
 */
angular.module('kuveij')
    .controller('statsController', ['$scope', 'ajaxFactory',
        function ($scope, ajaxFactory) {
            var image;
            var audio;
            var video;
            var data = [image, video, audio];

            ajaxFactory.loadAllComments().success(function (response) {
                var IdCountMap = {};
                for (var i = 0; i < response.length; i++) {
                    if (IdCountMap[response[i].fileId]) {
                        IdCountMap[response[i].fileId] += 1;
                    } else {
                        IdCountMap[response[i].fileId] = 1;
                    }
                }

                var arr = Object.keys(IdCountMap).map(function (value, key) {
                    return IdCountMap[key], IdCountMap[value];
                });

                for (var key in IdCountMap) {
                    if (IdCountMap.hasOwnProperty(key)) {
                        console.log(IdCountMap[key]);
                    }
                }

                console.log(Math.max.apply(null, arr));

                $scope.MostCommented = IdCountMap;
            });

            ajaxFactory.loadAllComments().success(function (data) {
                $scope.comments = data.length;
            });

            ajaxFactory.loadAllComments().success(function (data) {
                $scope.comments = data.length;
            });

            ajaxFactory.countImages().success(function (data) {
                $scope.imageCount = data.length;
            });

            ajaxFactory.countUsers().success(function (data) {
                $scope.usersRegistered = data.length;
            });


            $scope.countAllItems = function () {
                var allFileTypes = {};
                ajaxFactory.loadAllMedia().success(function (response) {
                    for (var i = 0; i < response.length; i++)
                        if (allFileTypes[response[i].type]) {
                            allFileTypes[response[i].type] += 1;
                        }

                    console.log(allFileTypes);
                });
            };

            var data1 = ["12", "11", "100"];

            $scope.countAllItems();

            $scope.labels = ["Images", "Videos", "Audio"];
            $scope.data = data1;

        }]);