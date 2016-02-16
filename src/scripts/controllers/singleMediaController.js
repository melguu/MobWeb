/**
 * Created by Artsi on 10/02/16.
 */
angular.module('kuveij')
    .controller('singleMediaController', function ($scope, ajaxFactory, $routeParams) {
        var id = $routeParams.id;
        var userID = "122";

        ajaxFactory.loadOneMedia(id).success(function (data) {
            $scope.file = data;
        });

        ajaxFactory.loadComments(id).success(function (data){
            $scope.comments = data;
        });

        $scope.addLike = function(){

            ajaxFactory.postLike(userID,id).success(function (data){
                $scope.liked = data;
                console.log(data);
            });
        };

        $scope.removeLike = function(){

            ajaxFactory.removeLike(userID,id).success(function (data){
                $scope.liked = data;
                console.log(data);
            });
        };

        $scope.sendComment = function(){


            var dataToComment = {
                user: userID,
                comment: $scope.comment_add
            };

            ajaxFactory.postComment(id,dataToComment).success(function (data) {
                $scope.commented = data;
            });
        };

    });
