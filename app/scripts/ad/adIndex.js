(function () {
    'use strict'
    angular.module('ad', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=ad*/
                .state("app.start-campaign", {
                    url: "/start-campaign",
                    controller:"StartCampaignCtrl as startCampaign",
                    templateUrl: "scripts/ad/views/start-campaignCtrl.html"
                })
        });
})();

