(function () {
    'use strict';

    angular.module('common')
        .directive('svAnalyticsInfo', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-analytics-info.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
