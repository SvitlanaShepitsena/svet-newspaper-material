(function () {
    'use strict'
    angular.module('ad.promotion', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=ad*/
                .state("app.user.ad", {

                    url: "/customer-ad",
                    controller: "CustomerAdCtrl as customerAd",
                    templateUrl: "scripts/ad/promotion/views/customer-adCtrl.html"
                })

                .state("app.customer-classified", {
                    url: "/customer-classified",
                    controller:"CustomerClassifiedCtrl",
                    templateUrl: "scripts/auth/views/customer-classifiedCtrl.html"
                })
                .state("app.user.ad.start", {
                    url: "/manage-campaign/:id",
                    controller: "StartCampaignCtrl as startCampaign",
                    templateUrl: "scripts/ad/promotion/views/start-campaignCtrl.html"
                })
//#state'
        });
})();