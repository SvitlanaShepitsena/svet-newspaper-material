(function () {
    'use strict';

    angular.module('home')
        .directive('svNewsSectionsNav', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-news-sections-nav.html',
                bindToController: {
                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
