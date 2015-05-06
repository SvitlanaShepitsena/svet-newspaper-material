(function () {
    'use strict'

    angular.module('auth.ya', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

				.state("app.test", {
					url: "/test", 
					controller:"TestCtrl",
					templateUrl: "scripts/auth/ya/views/testCtrl.html"
				})
//#state'

    });
})();

