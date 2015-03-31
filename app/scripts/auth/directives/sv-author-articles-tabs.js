(function () {
    'use strict';

    angular.module('auth')
        .directive('svAuthorArticlesTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-author-articles-tabs.html',
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
