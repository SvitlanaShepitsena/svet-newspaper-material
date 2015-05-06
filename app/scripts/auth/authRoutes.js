(function () {
    'use strict'
    angular.module('auth', ['ui.router', 'flow'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=auth*/
                .state("app.sign-up", {
                    url: "/sign-up",
                    controller: "SignUpCtrl as signUp",
                    templateUrl: "scripts/auth/views/sign-upCtrl.html"
                })
                .state("app.svet-login", {
                    url: "/svet-login",
                    controller: "SvetLoginCtrl as login",
                    templateUrl: "scripts/auth/views/svet-loginCtrl.html"
                })

//#state				.state("app.test-my", {
					url: "/test-my", 
					controller:"TestMyCtrl",
					templateUrl: "scripts/auth/views/testMyCtrl.html"
				})
'
        });
})();