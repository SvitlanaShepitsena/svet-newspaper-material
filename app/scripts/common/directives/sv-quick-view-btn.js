(function () {
    'use strict';

    angular.module('common')
        .directive('svQuickViewBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-quick-view-btn.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
