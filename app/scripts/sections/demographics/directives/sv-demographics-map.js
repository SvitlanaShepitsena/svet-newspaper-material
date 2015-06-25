(function () {
    'use strict';

    angular.module('sections.demographics')
        .directive('svDemographicsMap', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/demographics/directives/sv-demographics-map.html',
                scope: {
                    modalMethod: '&'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
