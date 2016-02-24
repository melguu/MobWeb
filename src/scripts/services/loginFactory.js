/**
 * Created by Artsi on 20/02/16.
 */
angular.module('kuveij')
    .factory('loginFactory', function ($http, $httpParamSerializer, SessionService) {
        var urlBase = 'http://util.mw.metropolia.fi/ImageRekt/api/v2/';
        var authService = {};

        authService.login = function (credentials) {
            return $http
                .post(urlBase + 'login', $httpParamSerializer(credentials), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(function (data) {
                    return data.data.userId;
                });

        };

        authService.getUsername = function (userId){
            return $http.get(urlBase + 'user/' + userId)
                .success(function (data) {
                    SessionService.create(userId, data.username);
                    return data.username;
                });
        };

        authService.isAuthenticated = function () {
            return !!SessionService.userId;
        };

        return authService;
    });