(function () {
    'use strict';
    angular.module('article')
        .directive('svArticleStatus', function (ArticlesServ) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-article-status.html',
                scope: {
                    key: '=',
                    property: '@',
                    chBox: '=',
                    lbl: '@'
                },
                link: function ($scope, el, attrs) {
                    ArticlesServ.getStatus($scope.key, $scope.property).then(function (status) {
                        $scope.status = status;
                    });
                    //status.$bindTo($scope, 'status').then(function () {
                    //});
                    $scope.changeArticleStatus = function (key) {
                        ArticlesServ.computeNewsOrder(key).then(function () {
                            $scope.status = !$scope.status;
                        })
                    };
                }
            };
        });
})();
