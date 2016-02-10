angular.module('kuveij')
    .factory('ajaxFactory', function ($http, $httpParamSerializer) {
        var urlBase = 'http://util.mw.metropolia.fi/ImageRekt/api/v2/';
        var ajaxFunctions = {};

        ajaxFunctions.loadAllMedia = function () {
            return $http.get(urlBase + 'files')
                .success(function (data) {
                    return data;
                });
        };

        ajaxFunctions.uploadFile = function (args) {
            return $http.post(urlBase + 'upload', args, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            });
        };

        ajaxFunctions.login = function (args) {
            return $http.post(urlBase + 'login', $httpParamSerializer(args), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .success(function (data) {
                    return data.status;
                });
        };

        ajaxFunctions.register = function (args) {
            return $http.post(urlBase + 'register', $httpParamSerializer(args), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .success(function (data) {
                    return data.status;
                });
        };

        return ajaxFunctions;
    });