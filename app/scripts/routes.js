(function () {
    'use strict'

    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state("app", {
                    abstract: true,
                    controller: "AppCtrl as app",
                    resolve: {
                        user: function (AuthServ) {
                            return AuthServ.getUser();
                        }
                    },
                    template: "<div ui-view=''></div>"
                })
                .state("app.home", {
                    url: "/home",
                    controller: "HomeCtrl as home",
                    templateUrl: "scripts/home/views/homeCtrl.html"
                })
                .state("app.politics", {
                    url: "/politics",
                    controller: "PoliticsCtrl as politics",
                    templateUrl: "scripts/politics/views/politicsCtrl.html"
                })
                .state("app.article", {
                    url: "/article",
                    controller: "ArticleCtrl as article",
                    templateUrl: "scripts/article/views/articleCtrl.html"
                })
                .state("app.contact", {
                    url: "/contact",
                    controller: "ContactCtrl as contact",
                    templateUrl: "scripts/contact/views/contactCtrl.html"
                })
//#state'
        });

})();