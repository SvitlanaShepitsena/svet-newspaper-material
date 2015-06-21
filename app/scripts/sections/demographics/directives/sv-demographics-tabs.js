(function () {
    'use strict';

    angular.module('sections.demographics')
        .directive('svDemographicsTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/demographics/directives/sv-demographics-tabs.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
