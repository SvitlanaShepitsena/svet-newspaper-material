(function () {
    'use strict';

    angular.module('home')
        .directive('svPostArticleBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-post-article-btn.html',
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
