(function () {
    'use strict';
    angular.module('article')
        .directive('svDeleteArticleBtn', function (toastr) {
            return {
                replace: true,
                require: '^?svAuthorArticlesTabs',
                templateUrl: 'scripts/article/directives/sv-delete-article-btn.html',
                scope: {
                    articleKey: '@'
                },
                link: function ($scope, el, attrs, ctrl) {
                    $scope.removeArticle = function () {
                        ctrl.removeOneArticle($scope.articleKey);
                        //toastr.info('Delete runned');
                    };
                }
            };
        });
})();
