(function () {
    'use strict';

    angular.module('auth')
        .directive('svProfileHeader', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-profile-header.html',
                scope: {
                    title: '@'
                },
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;

                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
