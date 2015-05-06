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
                    templateUrl: "scripts/ad/classified/views/classifiedCtrl.html"
                })
                .state("app.classified.all", {
                    url: "/all",
                    templateUrl: "scripts/ad/classified/views/all.html"
                })
                .state("app.classified.community", {
                    url: "/community",
                    templateUrl: "scripts/ad/classified/views/classified-community-list.html"
                })
                .state("app.classified.job", {
                    url: "/job",
                    templateUrl: "scripts/ad/classified/views/classified-job-list.html"
                })
                .state("app.classified.lessons", {
                    url: "/lessons",
                    templateUrl: "scripts/ad/classified/views/classified-lessons-list.html"
                })
                .state("app.classified.housing", {
                    url: "/housing",
                    templateUrl: "scripts/ad/classified/views/classified-housing-list.html"
                })
                .state("app.classified.sale", {
                    url: "/sale",
                    templateUrl: "scripts/ad/classified/views/classified-for-sale-list.html"
                })
                .state("app.classified.services", {
                    url: "/services",
                    templateUrl: "scripts/ad/classified/views/classified-services-list.html"
                })
                .state("app.classified.personal", {
                    url: "/personal",
                    templateUrl: "scripts/ad/classified/views/classified-personal-list.html"
                })
                .state("app.classified.cars", {
                    url: "/cars",
                    templateUrl: "scripts/ad/classified/views/classified-cars-list.html"
                })
                .state("app.classified.one-classified", {
                    url: "/:clid",
                    controller: "OneClassifiedCtrl as oneClassified",
                    templateUrl: "scripts/ad/classified/views/one-classifiedCtrl.html"
                })
//#state'
        });
})();

