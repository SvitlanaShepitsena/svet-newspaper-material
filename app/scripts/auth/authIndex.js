(function () {
    'use strict'

    angular.module('auth',['ui.router'] )
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=profile*/
                .state("app.user", {
                    abstract: true,
                    url: '/:uid',
                    controller: "UserCtrl as user",
                    templateUrl: "scripts/auth/views/userCtrl.html"
                })
                .state("app.user.user-dashboard", {
                    url: "/author-dashboard",
                    controller: "UserDashboardCtrl as userDashboard",
                    templateUrl: "scripts/auth/views/user-dashboardCtrl.html"
                })
                .state("app.user.create-article", {
                    url: "/create-article",
                    controller: "CreateArticleCtrl as createArticle",
                    templateUrl: "scripts/article/views/create-articleCtrl.html"
                })
                .state("app.user.author-articles", {
                    url: "/author-articles",
                    controller: "AuthorArticlesCtrl as authorArticles",
                    templateUrl: "scripts/auth/views/author-articlesCtrl.html"
                })
                .state("app.user.author-drafts", {
                    url: "/author-drafts",
                    controller: "AuthorDraftsCtrl as authorDrafts",
                    templateUrl: "scripts/auth/views/author-draftsCtrl.html"
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
                // READER
                .state("app.reader", {
                    url: "/reader/:uid",
                    abstract: true,
                    controller: "ReaderCtrl as reader",
                    templateUrl: "scripts/auth/views/readerCtrl.html"
                })

                .state("app.reader.profile", {
                    url: "/reader-profile",
                    controller: "ReaderProfileCtrl as readerProfile",
                    templateUrl: "scripts/auth/views/reader-profileCtrl.html"
                })

                .state("app.reader.subscriptions", {
                    url: "/pdf-subscriptions",
                    controller: "PdfSubscriptionsCtrl as pdfSubscriptions",
                    templateUrl: "scripts/auth/views/pdf-subscriptionsCtrl.html"
                })

                .state("app.reader.reader-activity-events", {
                    url: "/reader-activity-events",
                    controller: "ReaderActivityEventsCtrl as readerActivityEvents",
                    templateUrl: "scripts/auth/views/reader-activity-eventsCtrl.html"
                })
                .state("app.reader.reader-bookmarks", {
                    url: "/reader-bookmarks",
                    controller: "ReaderBookmarksCtrl as readerBookmarks",
                    templateUrl: "scripts/auth/views/reader-bookmarksCtrl.html"
                })
                .state("app.reader.reader-classified", {
                    url: "/reader-classified",
                    controller: "ReaderClassifiedCtrl as readerClassified",
                    templateUrl: "scripts/auth/views/reader-classifiedCtrl.html"
                })
                .state("app.user.user-events", {
                    url: "/user-events",
                    controller: "UserEventsCtrl as userEvents",
                    templateUrl: "scripts/auth/views/user-eventsCtrl.html"
                })
//#state'
        });

})();
