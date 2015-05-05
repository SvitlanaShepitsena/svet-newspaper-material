(function () {
    'use strict'

    angular.module('auth', ['ui.router','flow'])
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
                    templateUrl: "../author/views/author-articlesCtrl.html"
                })
                .state("app.user.author-drafts", {
                    url: "/author-drafts",
                    controller: "AuthorDraftsCtrl as authorDrafts",
                    templateUrl: "../author/views/author-draftsCtrl.html"
                })
                .state("app.user.user-events", {
                    url: "/events",
                    controller: "UserEventsCtrl as userEvents",
                    templateUrl: "../events/views/user-eventsCtrl.html"
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
                .state("app.manager.users", {
                    url: "/users",
                    controller: "ManagerUsersCtrl as managerUsers",
                    templateUrl: "scripts/auth/views/manager-usersCtrl.html"
                })
                .state("app.manager.clients", {
                    url: "/clients",
                    controller:"ManagerClientsCtrl as managerClients",
                    templateUrl: "scripts/auth/views/manager-clientsCtrl.html"
                })
                .state("app.manager.events", {
                    url: "/events",
                    controller: "ManagerEventsCtrl as managerEvents",
                    templateUrl: "../events/views/manager-eventsCtrl.html"
                })
                .state("app.manager.ad", {
                    url: "/advertisement",
                    controller:"ManagerAdCtrl as managerAd",
                    templateUrl: "../ad/promotion/views/manager-adCtrl.html"
                })

                .state("app.manager.create-event", {
                    url: "/create-event",
                    controller:"CreateSvetEventCtrl as createSvetEvent",
                    templateUrl: "../events/views/create-svet-eventCtrl.html"
                })


//#state'
        });

})();
