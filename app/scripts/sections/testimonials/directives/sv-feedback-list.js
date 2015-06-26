(function () {
    'use strict';

    angular.module('sections.testimonials')
        .directive('svFeedbackList', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/testimonials/directives/sv-feedback-list.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
