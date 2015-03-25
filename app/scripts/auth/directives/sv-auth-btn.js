(function () {
    'use strict';

    angular.module('auth')
        .directive('svAuthBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-auth-btn.html',
                scope: {},
                bindToController: {
                    someObject: '=',
                    someString: '@',
                    someExpr: '&'
                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;

                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
