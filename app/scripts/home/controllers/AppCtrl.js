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





            $rootScope.$on('error', function () {
                toastr.error('error');
            })

        });
})();

