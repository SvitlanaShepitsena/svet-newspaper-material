(function () {
    'use strict';

    angular.module('sections.testimonials')
        .directive('svOneFeedback', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/testimonials/directives/sv-one-feedback.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
