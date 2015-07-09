(function () {
    'use strict';

    angular.module('sections.demographics')
        .directive('svRuDemographics', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/demographics/directives/sv-ru-demographics.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
