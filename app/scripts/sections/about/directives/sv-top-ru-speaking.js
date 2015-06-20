(function () {
    'use strict';

    angular.module('sections.about')
        .directive('svTopRuSpeaking', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/about/directives/sv-top-ru-speaking.html',
                scope: {},
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
