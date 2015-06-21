(function () {
    'use strict';

    angular.module('sections.demographics')
        .directive('svTopRuStates', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/demographics/directives/sv-top-ru-states.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
