(function () {
    'use strict';

    angular.module('auth')
        .directive('svUserProfileNav', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-user-profile-nav.html',
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
