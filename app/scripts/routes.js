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
                /*news sections*/
                .state("app.politics", {
                    url: "/politics",
                    controller: "PoliticsCtrl as politics",
                    templateUrl: "scripts/politics/views/politicsCtrl.html"
                })
                .state("app.money", {
                    url: "/money",
                    controller: "MoneyCtrl as money",
                    templateUrl: "scripts/money/views/moneyCtrl.html"
                })
                .state("app.culture", {
                    url: "/culture",
                    controller: "CultureCtrl as culture",
                    templateUrl: "scripts/culture/views/cultureCtrl.html"
                })
                .state("app.society", {
                    url: "/society",
                    controller: "SocietyCtrl as society",
                    templateUrl: "scripts/society/views/societyCtrl.html"
                })
                .state("app.world", {
                    url: "/world",
                    controller: "WorldCtrl as world",
                    templateUrl: "scripts/world/views/worldCtrl.html"
                })
                .state("app.article", {
                    url: "/article/:id",
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
                .state("app.sign-up", {
                    url: "/sign-up",
                    controller: "SignUpCtrl as signUp",
                    templateUrl: "scripts/auth/views/sign-upCtrl.html"
                })
                /*=profile*/
                .state("app.svet-profile", {
                    abstract: true,
                    controller: "SvetProfileCtrl as svetProfile",
                    templateUrl: "scripts/auth/views/svet-profileCtrl.html"
                })
                .state("app.svet-login", {
                    url: "/svet-login",
                    controller: "SvetLoginCtrl as login",
                    templateUrl: "scripts/auth/views/svet-loginCtrl.html"
                })
                .state("app.svet-profile.create-article", {
                    url: "/create-article",
                    controller: "CreateArticleCtrl as createArticle",
                    templateUrl: "scripts/article/views/create-articleCtrl.html"
                })
                .state("app.svet-profile.author-dashboard", {
                    url: "/author-dashboard",
                    controller: "AuthorDashboardCtrl as authorDashboard",
                    templateUrl: "scripts/auth/views/author-dashboardCtrl.html"
                })

                .state("app.svet-profile.author-articles", {
                    url: "/author-articles",
                    controller: "AuthorArticlesCtrl as authorArticles",
                    templateUrl: "scripts/auth/views/author-articlesCtrl.html"
                })
                .state("app.svet-profile.author-drafts", {
                    url: "/author-drafts",
                    controller: "AuthorDraftsCtrl as authorDrafts",
                    templateUrl: "scripts/auth/views/author-draftsCtrl.html"
                })

                .state("app.svet-profile.profile-settings", {
                    url: "/profile-settings",
                    controller: "ProfileSettingsCtrl as profileSettings",
                    templateUrl: "scripts/auth/views/profile-settingsCtrl.html"
                })
                .state("app.events", {
                    url: "/events",
                    controller: "EventsCtrl as events",
                    templateUrl: "scripts/events/views/eventsCtrl.html"
                })

				.state("app.field-event", {
					url: "/events/field-event/:year",
					controller:"FieldEventCtrl as fieldEvent",
					templateUrl: "scripts/events/views/field-eventCtrl.html"
				})
//#state'
        });

})();