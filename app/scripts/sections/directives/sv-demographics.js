(function () {
    'use strict';

    angular.module('sections')
        .directive('svDemographics', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/directives/sv-demographics.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
