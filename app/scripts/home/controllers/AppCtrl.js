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
                var idCounter = 1;
                newsObj = _.map(_.filter(newsObj, function (newsOne) {
                    return _.isObject(newsOne);
                }), function (news) {
                   return _.extend(news,{id:idCounter++}) ;
                });
                $rootScope.newsList = newsObj;
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

