(function () {
    'use strict';

    angular.module('home')
        .directive('svSectionArticleThumb', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-section-article-thumb.html',
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
