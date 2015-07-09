(function () {
    'use strict'
    angular.module('sections.archive', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=archive*/
                .state("app.svet-newspaper", {
                    url: "/svet-newspaper",
                    controller: "SvetNewspaperCtrl as svetNewspaper",
                    templateUrl: "scripts/sections/archive/views/svetNewspaperCtrl.html"
                })
//#state'
        });
})();
