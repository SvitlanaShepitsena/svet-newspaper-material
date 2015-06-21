(function () {
    'use strict';

    angular.module('sections.demographics')
        .directive('svDemographics', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/demographics/directives/sv-demographics.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
