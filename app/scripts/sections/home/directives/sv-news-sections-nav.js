(function () {
    'use strict';
    angular.module('sections.home')
        .directive('svNewsSectionsNav', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-news-sections-nav.html',
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
