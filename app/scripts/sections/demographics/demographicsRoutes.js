(function () {
    'use strict'

    angular.module('sections.demographics', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

				.state("app.demographics", {
					url: "/demographics", 
					controller:"DemographicsCtrl",
					templateUrl: "scripts/sections/demographics/views/demographicsCtrl.html"
				})
//#state'

    });
})();

