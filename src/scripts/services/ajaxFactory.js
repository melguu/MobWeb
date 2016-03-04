angular.module('kuveij')
    .factory('ajaxFactory', ['$http', '$httpParamSerializer',
        function ($http, $httpParamSerializer) {
            var urlBase = 'http://util.mw.metropolia.fi/ImageRekt/api/v2/';
            var ajaxFunctions = {};

            ajaxFunctions.loadAllMedia = function () {
                return $http.get(urlBase + 'files')
                    .success(function (data) {
                        return data;
                    });
            };

            ajaxFunctions.loadOneMedia = function (id) {
                return $http.get(urlBase + 'file/' + id)
                    .success(function (data) {
                        return data;
                    });
            };

            ajaxFunctions.loadFavorites = function (username) {
                return $http.get(urlBase + 'likes/user/' + username)
                    .success(function (data) {
                        return data;
                    });
            };

            ajaxFunctions.loadSpecifiedMedia = function (name) {
                return $http.get(urlBase + 'files/type/' + name)
                    .success(function (data) {
                        return data;
                    });
            };

            ajaxFunctions.loadUserMedia = function (username) {
                return $http.get(urlBase + 'files/user/' + username)
                    .success(function (data) {
                        return data;
                    });
            };

            ajaxFunctions.loadComments = function (id) {
                return $http.get(urlBase + 'comments/file/' + id)
                    .success(function (data) {
                        return data;
                    });
            };

            ajaxFunctions.postComment = function (id, args) {
                return $http.post(urlBase + 'comment/file/' + id, $httpParamSerializer(args), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                    .success(function (data) {
                        return data.status;
                    });
            };

            ajaxFunctions.postLike = function (user, fileId) {
                return $http.get(urlBase + 'like/' + fileId + "/" + user)
                    .success(function (data) {
                        return data.status;
                    });
            };

            ajaxFunctions.removeLike = function (user, fileId) {
                return $http.get(urlBase + 'unlike/' + fileId + "/" + user)
                    .success(function (data) {
                        return data.status;
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

            ajaxFunctions.countUsers = function () {
                return $http.get(urlBase + 'users/')
                    .success(function (data) {
                        return data;
                    });
            };


            ajaxFunctions.loadAllComments = function () {
                return $http.get(urlBase + 'comments/')
                    .success(function (data) {
                        return data.fileId;
                    });
            };

            return ajaxFunctions;
        }]);