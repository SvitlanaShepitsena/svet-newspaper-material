(function () {
    'use strict';

    angular.module('sections.contact')
        .directive('svContactUs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/contact/directives/sv-contact-us.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
