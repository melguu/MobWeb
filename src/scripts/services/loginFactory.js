/**
 * Created by Artsi on 20/02/16.
 */
angular.module('kuveij')
    .factory('loginFactory', ['$http', '$httpParamSerializer', '$rootScope', 'AUTH_EVENTS', 'localStorageService',
        function ($http, $httpParamSerializer, $rootScope, AUTH_EVENTS, localStorageService) {
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
                        localStorageService.set("userId", userId);
                        authService.getUsername(userId);
                    }else{
                        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                    }

                }, function (){
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                });

        };

        authService.logout = function (){
            username = undefined;
            $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
            localStorageService.clearAll();
        };

        authService.getUsername = function (userId){
            $http.get(urlBase + 'user/' + userId)
                .success(function (response) {
                    username = response.username;
                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                });
        };

        authService.isAuthenticated = function () {
            if(localStorageService.get("userId") !== null){
                userId = localStorageService.get("userId");
                return true;
            }else{
                return false;
            }
        };

        authService.username = function (){
            return username;
        };

        authService.userId = function (){
            return userId;
        };

        return authService;
    }]);