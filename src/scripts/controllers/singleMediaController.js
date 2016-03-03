/**
 * Created by Artsi on 10/02/16.
 */
angular.module('kuveij')
    .controller('singleMediaController', ['$scope', 'ajaxFactory', '$routeParams', 'loginFactory', '$rootScope', 'AUTH_EVENTS', '$sce', 'MediaService', '$window',
        function ($scope, ajaxFactory, $routeParams, $window, loginFactory, $rootScope, AUTH_EVENTS, $sce, MediaService) {
            var id = $routeParams.id;

            ajaxFactory.loadOneMedia(id).success(function (data) {
                $scope.file = data;
                ajaxFactory.loadComments(id).success(function (data) {
                    $scope.comments = data;
                });
            });

            $scope.addLike = function () {
                if (loginFactory.isAuthenticated()) {
                    ajaxFactory.postLike(loginFactory.userId(), id).success(function (data) {
                        $scope.liked = data;
                    });
                } else {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                }
            };

            $scope.removeLike = function () {
                if (loginFactory.isAuthenticated()) {
                    ajaxFactory.removeLike(loginFactory.userId(), id).success(function (data) {
                        $scope.liked = data;
                    });
                } else {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                }
            };

            $scope.sendComment = function () {
                if (loginFactory.isAuthenticated()) {
                    var dataToComment = {
                        user: loginFactory.userId(),
                        comment: $scope.comment_add
                    };
                    ajaxFactory.postComment(id, dataToComment).success(function (data) {
                        $scope.commented = data;
                    });
                } else {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                }
            };

            $scope.trustSource = function (src) {
                return $sce.trustAsResourceUrl(MediaService.mediaUrl + src);
            };

            $scope.nextMedia = function () {
                var nextFile = id - (-1);
                window.location.assign('/src/app.html#/image/' + nextFile);
            };

            $scope.previousMedia = function () {
                var prevFile = id - 1;
                window.location.assign('/src/app.html#/image/' + prevFile);
            };

            $scope.randomMedia = function () {
                ajaxFactory.loadRandomMedia().success(function (data) {
                    $scope.file = data;
                    window.location.assign('/src/app.html#/image/' + data.fileId);
                });
            };

    }]);