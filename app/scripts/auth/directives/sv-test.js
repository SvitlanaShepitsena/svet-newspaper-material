(function () {
    'use strict';

    angular.module('auth')
        .directive('svTest', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-test.html',
                scope: {},
                bindToController: {

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
