(function () {
    'use strict';

    angular.module('auth')
        .directive('svAuthorDropdown', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-author-dropdown.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
