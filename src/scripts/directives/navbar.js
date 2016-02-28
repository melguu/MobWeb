/**
 * Created by Artsi on 26/02/16.
 */
angular.module('kuveij')
    .directive('navbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/navbar.html'
        };
    });