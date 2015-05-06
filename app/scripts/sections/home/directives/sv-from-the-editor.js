(function () {
    'use strict';
    angular.module('sections.home')
        .directive('svFromTheEditor', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-from-the-editor.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
