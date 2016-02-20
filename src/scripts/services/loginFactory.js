/**
 * Created by Artsi on 20/02/16.
 */
angular.module('kuveij')
    .factory('loginFactory', function ($http, $httpParamSerializer) {
        var urlBase = 'http://util.mw.metropolia.fi/ImageRekt/api/v2/';
        var loginFunctions = {};
        var loggedIn = "";

        loginFunctions.isLoggedIn = function () {
            if (loggedIn !== ""){
                loginFunctions.login(args);
            }else{
                return loggedIn;
            }
                };

        loginFunctions.login = function (args) {
            return $http.post(urlBase + 'login', $httpParamSerializer(args), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .success(function (data) {
                    console.log(args);
                    return data.status;
                });
        };

        return loginFunctions;
    });
