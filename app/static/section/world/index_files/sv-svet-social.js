(function () {
    'use strict';
    angular.module('sections.home')
        .directive('svSvetSocial', function ($mdBottomSheet) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-svet-social.html',
                link: function ($scope, element, attr) {
                }
            };
        });
})();
