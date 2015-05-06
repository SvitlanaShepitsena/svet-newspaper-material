(function () {
    'use strict';
    angular.module('common')
        .directive('svProfileHeader', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-profile-header.html',
                scope: {
                    headerTitle: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
