(function () {
    'use strict';
    angular.module('common')
        .directive('svStatusLabel', function () {
            return {
                replace: true,
                templateUrl: '/scripts/common/directives/sv-status-label.html',
                scope: {
                    labelTitle: '@',
                    fs: '@',
                    tc: '@',
                    bgc: '@',
                    labelPadding: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
