/**
 * Created by Artsi on 05/03/16.
 */
angular.module('kuveij')
    .directive('media', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/showMedia.html'
        };
    });