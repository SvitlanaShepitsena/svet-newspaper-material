(function () {
    'use strict'
    angular.module('sections.contact', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            /*=moduleName*/
                .state("app.contact", {
                    url: "/contact",
                    controller: "ContactCtrl",
                    templateUrl: "scripts/sections/contact/views/contactCtrl.html"
                })
				.state("app.get-svoboda-news", {
					url: "/get-svoboda-news",
					controller:"GetSvobodaNewsCtrl",
					templateUrl: "scripts/sections/contact/views/get-svoboda-newsCtrl.html"
				})
//#state'
        });
})();
