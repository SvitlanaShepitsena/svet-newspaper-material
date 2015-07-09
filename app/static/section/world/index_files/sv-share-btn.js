(function () {
    'use strict';

    angular.module('common')
        .directive('svShareBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-share-btn.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
