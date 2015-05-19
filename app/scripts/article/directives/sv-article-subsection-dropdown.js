(function () {
    'use strict';

    angular.module('article')
        .directive('svArticleSubsectionDropdown', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-article-subsection-dropdown.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
