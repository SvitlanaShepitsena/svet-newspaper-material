(function () {
    'use strict';

    angular.module('ad.classified')
        .directive('svAnimateOnChange', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-animate-on-change.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
