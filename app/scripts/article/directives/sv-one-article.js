(function () {
    'use strict';

    angular.module('article')
        .directive('svOneArticle', function () {
            return {
                replace: true,
                scope: {},
                templateUrl: 'scripts/article/directives/sv-one-article.html',
                bindToController: {
                    news: '='
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
