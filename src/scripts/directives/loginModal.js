/**
 * Created by Artsi on 20/02/16.
 */
angular.module('kuveij')
    .directive('loginDialog', function (AUTH_EVENTS, sessionStorage, $rootScope) {
        return {
            restrict: 'A',
            template: '<div ng-if="visible" ng-include="\'views/login.html\'">',
            link: function (scope) {
                var showDialog = function (){
                    scope.visible = true;
                };

                var hideDialog = function (){
                    scope.visible = false;
                };

                var userId = sessionStorage.get('userId');

                if(userId !== undefined){
                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                }

                scope.visible = false;
                scope.$on(AUTH_EVENTS.loginSuccess, hideDialog);
                scope.$on(AUTH_EVENTS.notAuthenticated, showDialog);
                scope.$on(AUTH_EVENTS.sessionTimeout, showDialog);
            }
        };
    });