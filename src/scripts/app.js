/**
 * Created by Artsi on 28/01/16.
 */
angular.module('kuveij', ['ngRoute', 'LocalStorageModule', 'ngTouch', 'chart.js'])
    .config(function ($routeProvider) {


        $routeProvider
            // route for the about page
            .when('/', {
                templateUrl: 'views/allMedia.html',
                controller: 'mediaController'
            })
            .when('/myImages', {
                templateUrl: 'views/myImages.html',
                controller: 'uploadController'
            })

            .when('/image/:id', {
                templateUrl: 'views/oneImage.html',
                controller: 'singleMediaController'
            })

            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'loginController'
            })

            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'registerController'
            })
            .when('/search', {
                templateUrl: 'views/search.html',
                controller: 'mediaController'
            })

            .when('/statistics', {
                templateUrl: 'views/stats.html',
                controller: 'statsController'
            })

            .otherwise({
                redirectTo: '/'
            });

    });