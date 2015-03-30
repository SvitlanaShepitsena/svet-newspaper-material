(function () {
    'use strict';

    angular.module('auth')
        .directive('svAuthorProfileNav', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-author-profile-nav.html',
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
