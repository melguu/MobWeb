/**
 * Created by Artsi on 10/02/16.
 */
angular.module('kuveij')
    .controller('singleMediaController', ['$scope', 'ajaxFactory', '$routeParams', 'loginFactory', '$rootScope', 'AUTH_EVENTS', '$sce', 'MediaService',
        function ($scope, ajaxFactory, $routeParams, loginFactory, $rootScope, AUTH_EVENTS, $sce, MediaService) {
            var id = $routeParams.id;

            $scope.clicked = false;


            ajaxFactory.loadOneMedia(id).success(function (data) {
                $scope.file = data;
                ajaxFactory.getUsername(data.userId).success(function (data) {
                    $scope.uploadedBy = data.username;
                });

            });

            ajaxFactory.loadComments(id).success(function (data) {
                $scope.comments = data;
            });

            $scope.addLike = function () {
                if (loginFactory.isAuthenticated()) {
                    ajaxFactory.postLike(loginFactory.userId(), id).success(function (data) {
                        $scope.clicked = true;
                    });
                } else {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                }
            };

            $scope.removeLike = function () {
                if (loginFactory.isAuthenticated()) {
                    ajaxFactory.removeLike(loginFactory.userId(), id).success(function (data) {
                        $scope.clicked = false;
                    });
                } else {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                }
            };

            $scope.checkLikes = function () {
                if (!loginFactory.isAuthenticated()) {
                    $scope.clicked = false;

                } else {

                    ajaxFactory.loadFavorites(loginFactory.userId()).success(function (data) {
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].fileId == id) {
                                $scope.clicked = true;
                                break;
                            } else {
                                $scope.clicked = false;
                            }
                        }
                    });
                }
            };

            $scope.sendComment = function () {
                if (loginFactory.isAuthenticated()) {
                    var dataToComment = {
                        user: loginFactory.userId(),
                        comment: $scope.comment_add
                    };
                    ajaxFactory.postComment(id, dataToComment).success(function (data) {
                        ajaxFactory.loadComments(id).success(function (data) {
                            $scope.comments = data;
                            $scope.comment_add = "";
                        });
                    });
                } else {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                }
            };

            $scope.trustSrc = function (src) {
                return $sce.trustAsResourceUrl(MediaService.mediaUrl + src);
            };

            $scope.nextMedia = function () {
                var nextFile = id - (-1);

                window.location.assign('/src/app.html#/image/' + nextFile);
                ajaxFactory.loadOneMedia(id).success(function (data) {
                    $scope.file = data;
                });
            };

            $scope.previousMedia = function () {
                var prevFile = id - 1;
                window.location.assign('/src/app.html#/image/' + prevFile);
                ajaxFactory.loadOneMedia(id).success(function (data) {
                    $scope.file = data;
                });
            };


            $scope.randomMedia = function () {
                ajaxFactory.loadRandomMedia().success(function (data) {
                    $scope.file = data;
                    window.location.assign('/src/app.html#/image/' + data.fileId);
                    ajaxFactory.loadOneMedia(id).success(function (data) {
                        $scope.file = data;
                    });
                });
            };

            $scope.checkLikes();

        }]);