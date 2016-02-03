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