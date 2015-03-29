(function () {
    'use strict';

    angular.module('aritcle')
        .directive('svNewArticleForm', function () {
            return {
                replace: true,
                templateUrl: 'scripts/aritcle/directives/sv-new-article-form.html',
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
