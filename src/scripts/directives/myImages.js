angular.module('kuveij')
    .directive('myImages', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/myImages.html'
        };
    });