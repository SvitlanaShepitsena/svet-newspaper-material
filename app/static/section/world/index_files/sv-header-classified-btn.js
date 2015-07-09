(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svHeaderClassifiedBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-header-classified-btn.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
