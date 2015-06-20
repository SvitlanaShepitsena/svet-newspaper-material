(function () {
    'use strict'

    angular.module('sections', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

				.state("app.demographics", {
					url: "/demographics", 
					controller:"DemographicsCtrl",
					templateUrl: "scripts/sections/views/demographicsCtrl.html"
				})
//#state'

    });
})();

