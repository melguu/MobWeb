/**
 * Created by Artsi on 28/01/16.
 */
angular.module('kuveij', ['ngRoute'])
    .config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'views/allMedia.html',
            controller  : 'mediaController'
        })

        .when('/myImages', {
            templateUrl : 'views/myImages.html',
            controller  : 'uploadController'
        })

        .when('/login', {
            templateUrl : 'views/login.html',
            controller  : 'loginController'
        });
});
