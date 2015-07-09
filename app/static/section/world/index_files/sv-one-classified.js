(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svOneClassified', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-one-classified.html',
                scope: {
                    cl: '=',
                    widget: '='
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
