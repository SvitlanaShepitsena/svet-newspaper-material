(function () {
    'use strict'

    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state("home", {
                    url: "/home",
                    controller: "HomeCtrl as home",
                    templateUrl: "scripts/home/views/homeCtrl.html"
                })
                .state("politics", {
                    url: "/politics",
                    controller: "PoliticsCtrl as politics",
                    templateUrl: "scripts/politics/views/politicsCtrl.html"
                })
				.state("article", {
					url: "/article", 
					controller:"ArticleCtrl as article",
					templateUrl: "scripts/article/views/articleCtrl.html"
				})
//#state'
        });

})();