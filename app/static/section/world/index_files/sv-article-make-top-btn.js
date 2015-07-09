(function () {
    'use strict';

    angular.module('article')
        .directive('svArticleMakeTopBtn', function () {
            return {
                replace: true,
                require: '?^svEditorArticlesTabs',
                templateUrl: 'scripts/article/directives/sv-article-make-top-btn.html',
                scope: {
                    article: '=',
                    index:'='
                },
                link: function ($scope, el, attrs, ctrl) {
                    $scope.moveToTop = function () {
                        ctrl.moveToTop($scope.article);
                    };

                }
            };
        });
})();
