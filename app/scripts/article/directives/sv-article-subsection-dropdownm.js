(function () {
    'use strict';

    angular.module('article')
        .directive('svArticleSubsectionDropdownm', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-article-subsection-dropdownm.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
