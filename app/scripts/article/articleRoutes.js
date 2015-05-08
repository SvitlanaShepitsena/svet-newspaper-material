(function () {
    'use strict'
    angular.module('article', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=article*/
                .state("app.article", {
                    url: "/article/:id",
                    controller: "ArticleCtrl as article",
                    templateUrl: "scripts/article/views/articleCtrl.html"
                })
                .state("app.user.create-article", {
                    url: "/manage-article/:artId",
                    controller: "CreateArticleCtrl as createArticle",
                    templateUrl: "scripts/article/views/create-articleCtrl.html"
                })
                .state("app.svet-recommends", {
                    url: "/svet-recommends",
                    controller: "SvetRecommendsCtrl as svetRecommends",
                    templateUrl: "scripts/article/views/svet-recommendsCtrl.html"
                })
//#state'
        });
})();

