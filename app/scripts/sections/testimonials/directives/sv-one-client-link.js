(function () {
    'use strict';

    angular.module('sections.testimonials')
        .directive('svOneClientLink', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/testimonials/directives/sv-one-client-link.html',
                scope: {
                    webAddress: '@',
                    clientLogo: '@',
                    imgWidth: '@',
                    imgHeight: '@',
                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
