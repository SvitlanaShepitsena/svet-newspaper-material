(function () {
    'use strict'

    angular.module('ad', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

				.state("app.ad", {
					url: "/ad", 
					controller:"AdCtrl",
					templateUrl: "scripts/ad/views/adCtrl.html"
				})
//#state'

    });
})();

