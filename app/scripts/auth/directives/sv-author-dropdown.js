(function () {
    'use strict';

    angular.module('auth')
        .directive('svAuthorDropdown', function () {
            return {
                templateUrl: 'scripts/auth/directives/sv-author-dropdown.html',
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
