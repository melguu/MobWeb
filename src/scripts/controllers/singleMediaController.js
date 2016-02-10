/**
 * Created by Artsi on 10/02/16.
 */
angular.module('kuveij')
    .controller('singleMediaController', function ($scope, ajaxFactory, $routeParams) {
        var id = $routeParams.id;

        ajaxFactory.loadOneMedia(id).success(function (data) {
            $scope.file = data;
        });

        ajaxFactory.loadComments(id).success(function (data){
            $scope.comments = data;
        });

    });
