(function () {
    'use strict';
    angular.module('article')
        .directive('svDeleteArticleBtn', function ($mdDialog, toastr) {
            return {
                replace: true,
                require: '^svAuthorArticlesTabs',
                templateUrl: 'scripts/article/directives/sv-delete-article-btn.html',
                scope: {
                    articleKey: '@'
                },
                link: function ($scope, el, attrs, ctrl) {
                    $scope.removeArticle = function () {
                        $mdDialog.show({
                            controller: function ($scope, $mdDialog) {
                                $scope.delete = function () {
                                    $mdDialog.hide(true);
                                }
                                $scope.cancel = function () {
                                    $mdDialog.cancel()
                                }
                            },
                            templateUrl: 'scripts/events/views/modalDeleteConfirm.html',
                        }).then(function () {
                            ctrl.removeOneArticle($scope.articleKey).then(function () {
                                toastr.warning('Article is successfully removed');
                            }, function () {
                                toastr.info('Article removal canceled');
                            });
                        })
                    };
                }
            };
        });
})();
