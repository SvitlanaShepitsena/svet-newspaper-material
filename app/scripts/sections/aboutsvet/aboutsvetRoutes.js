(function () {
    'use strict'

    angular.module('sections.aboutsvet', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

				.state("app.", {
					url: "/", 
					controller:"Ctrl",
					templateUrl: "scripts/sections/aboutsvet/views/Ctrl.html"
				})
//#state'

    });
})();

