(function () {
    'use strict'
    angular.module('ad.classified', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=ad*/
                /*classified*/
                .state("app.classified", {
                    abstract:true,
                    url: "/classified",
                    resolve:{
                        clsLive: function (ClassifiedServ) {
                            return ClassifiedServ.bindClassifiedsLive();
                        }
                    },
                    controller: "ClassifiedCtrl as classified",
                    templateUrl: "scripts/ad/classified/views/classifiedCtrl.html"
                })
                //.state("app.classified.all", {
                //    url: "/all",
                //    templateUrl: "scripts/ad/classified/views/classified-general.html"
                //})
                .state("app.classified.community", {
                    url: "/community",
                    templateUrl: "scripts/ad/classified/views/classified-general.html"
                })
                .state("app.classified.job", {
                    url: "/job",
                    templateUrl: "scripts/ad/classified/views/classified-general.html"

                })
                .state("app.classified.lessons", {
                    url: "/lessons",
                    templateUrl: "scripts/ad/classified/views/classified-general.html"
                })
                .state("app.classified.housing", {
                    url: "/housing",
                    templateUrl: "scripts/ad/classified/views/classified-general.html"
                })
                .state("app.classified.sale", {
                    url: "/sale",
                    templateUrl: "scripts/ad/classified/views/classified-general.html"
                })
                .state("app.classified.services", {
                    url: "/services",
                    templateUrl: "scripts/ad/classified/views/classified-general.html"
                })
                .state("app.classified.personal", {
                    url: "/personal",
                    templateUrl: "scripts/ad/classified/views/classified-general.html"
                })
                .state("app.classified.cars", {
                    url: "/cars",
                    templateUrl: "scripts/ad/classified/views/classified-general.html"
                })
                .state("app.classified.one-classified", {
                    url: "/:clSection/:clId",
                    controller: "OneClassifiedCtrl as oneClassified",
                    templateUrl: "scripts/ad/classified/views/one-classifiedCtrl.html"
                })

//#state'
        });
})();
