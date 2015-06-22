(function () {
    'use strict'

    angular.module('sections.testimonials', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

				.state("app.testimoinals", {
					url: "/testimoinals", 
					controller:"TestimoinalsCtrl",
					templateUrl: "scripts/sections/testimonials/views/testimoinalsCtrl.html"
				})
//#state'

    });
})();

