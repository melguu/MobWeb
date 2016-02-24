/**
 * Created by Artsi on 10/02/16.
 */
angular.module('kuveij')
    .controller('singleMediaController', function ($scope, ajaxFactory, $routeParams, loginFactory, $rootScope, AUTH_EVENTS) {
        var id = $routeParams.id;

        ajaxFactory.loadOneMedia(id).success(function (data) {
            $scope.file = data;
        });

        ajaxFactory.loadComments(id).success(function (data){
            $scope.comments = data;
        });

        $scope.addLike = function(){
            if(loginFactory.isAuthenticated()){
                ajaxFactory.postLike(loginFactory.userId(),id).success(function (data){
                    $scope.liked = data;
                });
            }else{
                $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            }
        };

        $scope.removeLike = function(){

            ajaxFactory.removeLike(userID,id).success(function (data){
                $scope.liked = data;
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
