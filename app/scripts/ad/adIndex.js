(function () {
    'use strict'
    angular.module('ad', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=ad*/

                .state("app.user.ad", {
                    url: "/business-ad",
                    controller: "BusinessAdCtrl as businessAd",
                    templateUrl: "scripts/auth/views/business-adCtrl.html"
                })
                .state("app.start-campaign", {
                    url: "/start-campaign",
                    controller:"StartCampaignCtrl as startCampaign",
                    templateUrl: "scripts/ad/views/start-campaignCtrl.html"
                })
        });
})();

