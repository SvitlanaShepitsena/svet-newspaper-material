(function () {
    'use strict';

    angular.module('article')
        .directive('svNewsSectionsDropdown', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-news-sections-dropdown.html',
                scope: {},
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
