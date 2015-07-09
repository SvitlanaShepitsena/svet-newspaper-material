(function () {
    'use strict';
    angular.module('article')
        .directive('svArticleThumbTitle', function (ArticlesServ, svetNews, $stateParams) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-article-thumb-title.html',
                scope: {
                    tags: '@',
                    tc: '@',
                    titleTc: '@',
                    bgc: '@',
                    sectionIcon: '@',
                    sectionTitle: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.tags = $scope.tags || ' ';

                    $scope.filterTags = $scope.tags.split(' ');


                    $scope.tc = $scope.tc || 'tc-grey-700';
                    $scope.bgc = $scope.bgc || 'bgc-grey-100';
                    $scope.sectionIcon = $scope.sectionIcon || 'newspaper';
                    $scope.sectionName = $stateParams.sectionName;
                    $scope.newsList = svetNews.public;
                    //if (!svetNews.public) {
                    //    ArticlesServ.setHomeNewsLive().then(function () {
                    //        $scope.newsList = svetNews.public;
                    //    })
                    //} else {
                    //    $scope.newsList = svetNews.public;
                    //}
                }
            };
        });
})();
