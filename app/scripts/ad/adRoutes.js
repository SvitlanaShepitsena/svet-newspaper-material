(function () {
    'use strict'
    angular.module('ad', [])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("app.user.ad", {
                    abstract: true,
                    url: "/ad",
                    controller: "AdCtrl",
                    templateUrl: "scripts/ad/views/adCtrl.html"
                })
                .state("app.user.ad.classified", {
                    url: "/classified",
                    controller: "CustomerClassifiedCtrl",
                    templateUrl: "scripts/auth/views/customer-classifiedCtrl.html"
                })
                .state("app.user.ad.promotion", {
                    url: "/promotion",
                    controller: "CustomerAdCtrl as customerAd",
                    templateUrl: "scripts/ad/promotion/views/customer-adCtrl.html"
                })
                .state("app.user.ad.start", {
                    url: "/manage-campaign/:id",
                    controller: "StartCampaignCtrl as startCampaign",
                    templateUrl: "scripts/ad/promotion/views/start-campaignCtrl.html"
                })
//#state'
        });
})();

