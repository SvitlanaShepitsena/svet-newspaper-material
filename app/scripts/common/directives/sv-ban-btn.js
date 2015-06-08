(function () {
    'use strict';
    angular.module('common')
        .directive('svBanBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-ban-btn.html',
                scope: {
                    banMethod: '&'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
