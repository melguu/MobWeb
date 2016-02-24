/**
 * Created by Artsi on 20/02/16.
 */
angular.module('kuveij')
    .directive('loginDialog', function (AUTH_EVENTS) {
        return {
            restrict: 'A',
            template: '<div ng-if="visible" ng-include="\'views/login.html\'">',
            link: function (scope) {
                var showDialog = function () {
                    scope.visible = true;
                };

                var hideDialog = function(){
                    scope.visible = false;
                };

                scope.visible = false;
                scope.$on(AUTH_EVENTS.loginSuccess, hideDialog);
                scope.$on(AUTH_EVENTS.notAuthenticated, showDialog);
                scope.$on(AUTH_EVENTS.sessionTimeout, showDialog);
            }
        };
    });