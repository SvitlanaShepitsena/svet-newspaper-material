(function () {
    'use strict'
    angular.module('common', ['ui.router', 'flow'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("app.section", {
                    url: "/section/:sectionName",
                    controller: "SectionCtrl",
                    templateUrl: "scripts/common/views/sectionCtrl.html"
                })
                .state("app.ga", {
                    url: "/svet-analytics-data",
                    controller: "GaCtrl",
                    templateUrl: "scripts/common/views/gaCtrl.html"
                })
                .state("app.one-photo-gallery", {
                    url: "/one-photo-gallery",
                    controller: "One-photo-galleryCtrl",
                    templateUrl: "scripts/common/views/one-photo-galleryCtrl.html"
                })
//#state'
        });
})();