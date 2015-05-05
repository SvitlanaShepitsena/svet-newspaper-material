(function () {
    'use strict'
    angular.module('sections.archive', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=archive*/
                .state("app.new-light-newspaper", {
                    url: "/new-light-newspaper",
                    controller: "NewLightNewspaperCtrl as newLightNewspaper",
                    templateUrl: "/views/new-light-newspaperCtrl.html"
                })
                .state("app.saturday-plus-newspaper", {
                    url: "/saturday-plus-newspaper",
                    controller: "SaturdayPlusNewspaperCtrl as saturdayPlusNewspaper",
                    templateUrl: "/views/saturday-plus-newspaperCtrl.html"
                })
//#state'
        });
})();
