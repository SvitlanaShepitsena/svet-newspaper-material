(function () {
    'use strict';

    angular.module('article')
        .directive('svFreshNewsList', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-fresh-news-list.html',
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
