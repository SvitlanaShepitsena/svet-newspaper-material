(function () {
    'use strict';

    angular.module('classified')
        .directive('svOneClassified', function () {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-one-classified.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
