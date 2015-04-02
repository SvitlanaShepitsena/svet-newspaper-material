(function () {
    'use strict';

    angular.module('home')
        .controller('AppCtrl', function (NewsProcessServ, $scope, user, $rootScope, toastr, ArticleServ) {

            var app = this;
            $rootScope.user = user;


            var newsRef = ArticleServ.allObjRef();
            newsRef.$bindTo($rootScope, "newsObj").then(function () {
                $rootScope.loaded = true;
            });

            $scope.$watch('newsObj', function (newsObj) {
                if (!newsObj) {
                    return;
                }
                var newsTrioGrid = NewsProcessServ.get(newsObj);
                $rootScope.news = newsTrioGrid.trios;
                $rootScope.newsGrid = newsTrioGrid.newsGrid;

                var breakPoint = 1;


            });


            $rootScope.$on('error', function () {
                toastr.error('error');
            })

        });
})();

