(function () {
    'use strict'
    angular.module('classified', ['ui.router', 'flow'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=classified*/
                .state("app.classified", {
                    url: "/classified",
                    controller: "ClassifiedCtrl as classified",
                    templateUrl: "scripts/classified/views/classifiedCtrl.html"
                })
                .state("app.one-classified", {
                    url: "/one-classified",
                    controller: "OneClassifiedCtrl as oneClassified",
                    templateUrl: "scripts/classified/views/one-classifiedCtrl.html"
                })
//#state'
        });
})();
