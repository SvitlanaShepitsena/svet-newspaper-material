(function () {
    'use strict'
    angular.module('sections.home', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            /*=home*/



				.state("app.my", {
					url: "/my", 
					controller:"MyCtrl",
					templateUrl: "scripts/sections/home/views/myCtrl.html"
				})
//#state'
        });
})();
