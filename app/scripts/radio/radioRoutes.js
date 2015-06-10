(function () {
    'use strict'

    angular.module('radio', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

				.state("app.radio", {
					url: "/radio", 
					controller:"RadioCtrl",
					templateUrl: "scripts/radio/views/radioCtrl.html"
				})
//#state'

    });
})();

