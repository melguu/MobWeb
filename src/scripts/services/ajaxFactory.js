angular.module('kuveij')
    .factory('ajaxFactory', function ($http) {
        var urlBase = 'http://util.mw.metropolia.fi/ImageRekt/api/v2/';
        var ajaxFunctions = {};

        ajaxFunctions.loadAllMedia = function(){
            return $http.get(urlBase + 'files')
                .success(function (data) {
                return data;
            });
        };

        ajaxFunctions.loadOneMedia = function(id){
            return $http.get(urlBase + 'file/' + id)
                .success(function (data) {
                    return data;
                });
        };

        ajaxFunctions.loadUserMedia = function(username){
            return $http.get(urlBase + 'files/user/' + username)
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

        return ajaxFunctions;
    });