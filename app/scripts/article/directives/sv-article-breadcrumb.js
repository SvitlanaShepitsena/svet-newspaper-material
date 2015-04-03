(function () {
    'use strict';

    angular.module('article')
        .directive('svArticleBreadcrumb', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-article-breadcrumb.html',
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
