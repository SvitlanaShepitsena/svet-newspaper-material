(function () {
    'use strict';

    angular.module('home')
        .controller('AppCtrl', function ($scope, user,$rootScope,toastr, ArticleServ) {

            var app = this;
            $rootScope.user = user;


            var newsRef = ArticleServ.allObjRef();

            newsRef.$bindTo($rootScope, "news").then(function() {
            });


            $rootScope.$on('error', function () {
                toastr.error('error');
            })

        });
})();

