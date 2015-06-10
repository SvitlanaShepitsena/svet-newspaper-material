(function () {
    'use strict'
    angular.module('sections.radio', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            /*=home*/
				.state("app.radio", {
					url: "/radio", 
					controller:"RadioCtrl",
					templateUrl: "scripts/sections/radio/views/radioCtrl.html"
				})
//#state'
        });
})();
