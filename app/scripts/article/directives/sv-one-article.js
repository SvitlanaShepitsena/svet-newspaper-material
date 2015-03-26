(function () {
    'use strict';

    angular.module('article')
        .directive('svOneArticle', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-one-article.html',
                scope: {
                    title: '@',
                    body: '@',
                    author: '@',
                    sections: '=',
                    date: '@'
                },
                bindToController: {
                    someObject: '=',
                    someString: '@',
                    someExpr: '&'
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
