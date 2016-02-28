/**
 * Created by Artsi on 20/02/16.
 */
angular.module('kuveij')
    .factory('loginFactory', function ($http, $httpParamSerializer, $rootScope, AUTH_EVENTS) {
        var urlBase = 'http://util.mw.metropolia.fi/ImageRekt/api/v2/';
        var authService = {};
        var username;
        var userId;

        authService.login = function (credentials) {
            $http
                .post(urlBase + 'login', $httpParamSerializer(credentials), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(function (response) {
                    if (response.status == "200"){
                        userId = response.data.userId;
                        authService.getUsername(userId);
                    }else{
                        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                    }

                }, function (response){
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                });

        };

        authService.logout = function (){
            $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
            username = undefined;
        };

        authService.getUsername = function (userId){
            $http.get(urlBase + 'user/' + userId)
                .success(function (response) {
                    username = response.username;
                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                });
        };

        authService.isAuthenticated = function () {
            return typeof userId !== "undefined";
        };

        authService.username = function (){
            return username;
        };

        authService.userId = function (){
            return userId;
        };

        return authService;
    });