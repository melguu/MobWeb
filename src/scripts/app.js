/**
 * Created by Artsi on 28/01/16.
 */
angular.module('kuveij', ['ngRoute'])
    .config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'views/allMedia.html',
            controller  : 'mediaController'
        })

        // route for the about page
        .when('/myImages', {
            templateUrl : 'views/myImages.html',
            controller  : 'uploadController'
        })

        // route for the about page
        .when('/image/:id', {
            templateUrl : 'views/oneImage.html',
            controller  : 'singleMediaController'
        });
});
