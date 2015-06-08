				.state("app.customer-classified", {
					url: "/customer-classified", 
					controller:"CustomerClassifiedCtrl",
					templateUrl: "scripts/auth/views/customer-classifiedCtrl.html"
				})
(function () {
    'use strict'
    angular.module('auth', ['ui.router', 'flow'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=auth*/

        });
})();
