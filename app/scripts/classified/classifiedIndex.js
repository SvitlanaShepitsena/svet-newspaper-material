(function () {
    'use strict'
    angular.module('classified', ['ui.router', 'flow'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=classified*/
                .state("app.classified", {
                    url: "/classified",
                    controller: "ClassifiedCtrl as classified",
                    templateUrl: "scripts/classified/views/classifiedCtrl.html"
                })
                .state("app.classified.all", {
                    url: "/all",
                    templateUrl: "scripts/classified/views/all.html"
                })
                .state("app.classified.community", {
                    url: "/community",
                    templateUrl: "scripts/classified/views/classified-community-list.html"
                })
                .state("app.classified.job", {
                    url: "/job",
                    templateUrl: "scripts/classified/views/classified-job-list.html"
                })
                .state("app.classified.lessons", {
                    url: "/lessons",
                    templateUrl: "scripts/classified/views/classified-lessons-list.html"
                })
                .state("app.classified.housing", {
                    url: "/housing",
                    templateUrl: "scripts/classified/views/classified-housing-list.html"
                })
                .state("app.classified.sale", {
                    url: "/sale",
                    templateUrl: "scripts/classified/views/classified-for-sale-list.html"
                })
                .state("app.classified.services", {
                    url: "/services",
                    templateUrl: "scripts/classified/views/classified-services-list.html"
                })
                .state("app.classified.personal", {
                    url: "/personal",
                    templateUrl: "scripts/classified/views/classified-personal-list.html"
                })
                .state("app.classified.cars", {
                    url: "/cars",
                    templateUrl: "scripts/classified/views/classified-cars-list.html"
                })
                .state("app.classified.one-classified", {
                    url: "/:clid",
                    controller: "OneClassifiedCtrl as oneClassified",
                    templateUrl: "scripts/classified/views/one-classifiedCtrl.html"
                })
//#state'
        });
})();
