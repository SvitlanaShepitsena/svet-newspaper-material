(function () {
    'use strict';
    angular.module('sections.radio')
        .directive('svRadioOsa', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/radio/directives/sv-radio-osa.html',
                scope: {
                    title: '@',
                    subhead: '@',
                    body: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
