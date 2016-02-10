/**
 * Created by Artsi on 28/01/16.
 */
angular.module('kuveij', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
        // route for the home page
            .when('/', {
            templateUrl: 'views/allMedia.html',
            controller: 'mediaController'
        })

        // route for the about page
        .when('/myImages', {
            templateUrl: 'views/myImages.html',
            controller: 'uploadController'
        })

        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })

        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'registerController'
        });
    });