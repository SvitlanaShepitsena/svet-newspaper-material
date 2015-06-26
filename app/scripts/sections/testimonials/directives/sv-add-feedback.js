(function () {
    'use strict';

    angular.module('sections.testimonials')
        .directive('svAddFeedback', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/testimonials/directives/sv-add-feedback.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
