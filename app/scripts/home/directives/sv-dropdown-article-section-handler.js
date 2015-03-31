(function () {
    'use strict';

    angular.module('home')
        .directive('svDropdownArticleSectionHandler', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-dropdown-article-section-handler.html',
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
