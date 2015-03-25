(function () {
    'use strict'

    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('app', {
                    abstract: true
                    //controller: 'MainCtrl as main'
                })

				.state("app.home", {
					url: "/home",
					controller:"HomeCtrl as home",
					templateUrl: "scripts/home/views/homeCtrl.html"
				})
//#state'
        });

})();