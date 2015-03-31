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
                .state("app.classified", {
                    url: "/classified",
                    controller: "ClassifiedCtrl as classified",
                    templateUrl: "scripts/classified/views/classifiedCtrl.html"
                })
                .state("app.svet-login", {
                    url: "/svet-login",
                    controller: "SvetLoginCtrl as login",
                    templateUrl: "scripts/auth/views/svet-loginCtrl.html"
                })
                .state("app.sign-up", {
                    url: "/sign-up",
                    controller: "SignUpCtrl as signUp",
                    templateUrl: "scripts/auth/views/sign-upCtrl.html"
                })
                .state("app.create-article", {
                    url: "/create-article",
                    controller: "CreateArticleCtrl as createArticle",
                    templateUrl: "scripts/article/views/create-articleCtrl.html"
                })
                .state("app.author-dashboard", {
                    url: "/author-dashboard",
                    controller: "AuthorDashboardCtrl as authorDashboard",
                    templateUrl: "scripts/auth/views/author-dashboardCtrl.html"
                })
				.state("app.top-news", {
					url: "/top-news", 
					controller:"Top-newsCtrl as top-news",
					templateUrl: "scripts/article/views/top-newsCtrl.html"
				})
//#state'
        });

})();