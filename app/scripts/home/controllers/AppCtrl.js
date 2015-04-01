(function () {
    'use strict';

    angular.module('home')
        .controller('AppCtrl', function (NewsProcessServ, $scope, user, $rootScope, toastr, ArticleServ) {

            var app = this;
            $rootScope.user = user;


            var newsRef = ArticleServ.allObjRef();
            newsRef.$bindTo($rootScope, "newsObj").then(function () {
                $rootScope.news = NewsProcessServ.get($rootScope.newsObj);

                $rootScope.loaded = true;
            });

            $scope.$watch('newsObj', function (newsObj) {
                $rootScope.news = NewsProcessServ.get(newsObj);


            });


            $rootScope.$on('error', function () {
                toastr.error('error');
            })

        });
})();

