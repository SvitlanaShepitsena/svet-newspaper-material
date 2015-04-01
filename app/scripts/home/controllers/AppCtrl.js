(function () {
    'use strict';

    angular.module('home')
        .controller('AppCtrl', function (NewsProcessServ, $scope, user, $rootScope, toastr, ArticleServ) {

            var app = this;
            $rootScope.user = user;


            var newsRef = ArticleServ.allObjRef();
            newsRef.$bindTo($rootScope, "news").then(function (news) {
                console.log($rootScope.news);
                $rootScope.loaded = true;
            });


            $rootScope.$on('error', function () {
                toastr.error('error');
            })

        });
})();

