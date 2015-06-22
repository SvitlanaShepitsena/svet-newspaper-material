(function () {
    'use strict';

    angular.module('sections.testimoniasl')
        .directive('svTestimonialsTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/testimoniasl/directives/sv-testimonials-tabs.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
