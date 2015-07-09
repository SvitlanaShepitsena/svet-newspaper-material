(function () {
    'use strict';
    angular.module('common')
        .directive('svBanBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-ban-btn.html',
                scope: {
                    cl: '='
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
