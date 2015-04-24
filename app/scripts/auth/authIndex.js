(function () {
    'use strict'

    angular.module('auth', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=profile*/
                .state("app.user", {
                    abstract: true,
                    url: '/:uid',
                    controller: "UserCtrl as user",
                    templateUrl: "scripts/auth/views/userCtrl.html"
                })
                .state("app.user.dashboard", {
                    url: "/dashboard",
                    controller: "UserDashboardCtrl as userDashboard",
                    templateUrl: "scripts/auth/views/user-dashboardCtrl.html"
                })
                .state("app.user.create-article", {
                    url: "/create-article",
                    controller: "CreateArticleCtrl as createArticle",
                    templateUrl: "scripts/article/views/create-articleCtrl.html"
                })
                .state("app.user.author-articles", {
                    url: "/articles",
                    controller: "AuthorArticlesCtrl as authorArticles",
                    templateUrl: "scripts/auth/views/author-articlesCtrl.html"
                })
                .state("app.user.author-drafts", {
                    url: "/author-drafts",
                    controller: "AuthorDraftsCtrl as authorDrafts",
                    templateUrl: "scripts/auth/views/author-draftsCtrl.html"
                })
                .state("app.user.user-events", {
                    url: "/events",
                    controller: "UserEventsCtrl as userEvents",
                    templateUrl: "scripts/auth/views/user-eventsCtrl.html"
                })
                .state("app.user.profile-settings", {
                    url: "/profile-settings",
                    controller: "ProfileSettingsCtrl as profileSettings",
                    templateUrl: "scripts/auth/views/profile-settingsCtrl.html"
                })
                .state("app.user.social", {
                    url: "/social",
                    controller: "SocialCtrl as social",
                    templateUrl: "scripts/author/views/socialCtrl.html"
                })
                .state("app.user.business-ad", {
                    url: "/business-ad",
                    controller: "BusinessAdCtrl as businessAd",
                    templateUrl: "scripts/auth/views/business-adCtrl.html"
                })
                // =Manager Profile
                .state("app.manager", {
                    url: "/manager/:uid",
                    abstract: true,
                    controller: "ManagerCtrl as manager",
                    templateUrl: "scripts/auth/views/managerCtrl.html"
                })

                .state("app.manager.dashboard", {
                    url: "/dashboard",
                    controller: "ManagerDashboardCtrl as managerDashboard",
                    templateUrl: "scripts/auth/views/manager-dashboardCtrl.html"
                })
                .state("app.manager.social", {
                    url: "/manager-social",
                    controller: "ManagerSocialCtrl as managerSocial",
                    templateUrl: "scripts/auth/views/manager-socialCtrl.html"
                })
                .state("app.manager.events", {
                    url: "/manager-events",
                    controller: "ManagerEventsCtrl as managerEvents",
                    templateUrl: "scripts/auth/views/manager-eventsCtrl.html"
                })


//#state'
        });

})();
