(function () {
    'use strict'
    angular.module('ad.classified', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=ad*/
                /*classified*/
                .state("app.classified", {
                    url: "/classified",
                    controller: "ClassifiedCtrl as classified",
                    templateUrl: "/views/classifiedCtrl.html"
                })
                .state("app.classified.all", {
                    url: "/all",
                    templateUrl: "/views/all.html"
                })
                .state("app.classified.community", {
                    url: "/community",
                    templateUrl: "/views/classified-community-list.html"
                })
                .state("app.classified.job", {
                    url: "/job",
                    templateUrl: "/views/classified-job-list.html"
                })
                .state("app.classified.lessons", {
                    url: "/lessons",
                    templateUrl: "/views/classified-lessons-list.html"
                })
                .state("app.classified.housing", {
                    url: "/housing",
                    templateUrl: "/views/classified-housing-list.html"
                })
                .state("app.classified.sale", {
                    url: "/sale",
                    templateUrl: "/views/classified-for-sale-list.html"
                })
                .state("app.classified.services", {
                    url: "/services",
                    templateUrl: "/views/classified-services-list.html"
                })
                .state("app.classified.personal", {
                    url: "/personal",
                    templateUrl: "/views/classified-personal-list.html"
                })
                .state("app.classified.cars", {
                    url: "/cars",
                    templateUrl: "/views/classified-cars-list.html"
                })
                .state("app.classified.one-classified", {
                    url: "/:clid",
                    controller: "OneClassifiedCtrl as oneClassified",
                    templateUrl: "/views/one-classifiedCtrl.html"
                })
        });
})();

