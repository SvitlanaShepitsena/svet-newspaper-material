(function () {
    'use strict'

    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                //.state('app', {
                //    abstract: true,
                //    controller: 'MainCtrl as main',
                //    resolve: {
                //        news: function (NewsGeneratorServ) {
                //            return NewsGeneratorServ.getPoliticalNews(25, true);
                //        },
                //        user: function (AuthServ) {
                //            return AuthServ.getUser();
                //        }
                //    },
                //    templateUrl: 'scripts/sections/home/views/main.html'
                //
                //});




				.state("app.main", {
					url: "/main", 
					controller:"MainCtrl as main",
					templateUrl: "scripts/main/views/mainCtrl.html"
				})
//#state'
        });

})();