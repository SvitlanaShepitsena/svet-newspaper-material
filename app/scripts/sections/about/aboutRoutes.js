(function () {
    'use strict'

    angular.module('sections.about', [])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider

                .state("app.about", {
                    url: "/about",
                    abstract: true,
                    controller: "AboutCtrl",
                    templateUrl: "scripts/sections/about/views/aboutCtrl.html"
                })
                .state("app.about.about-tab-content", {
                    url: "/about-tab-content",
                    templateUrl: "scripts/sections/about/views/about-tab-contentCtrl.html"
                })
                .state("app.about.demographics-tab-content", {
                    url: "/demographics-tab-content",
                    controller: "DemographicsTabContentCtrl",
                    templateUrl: "scripts/sections/about/views/demographics-tab-contentCtrl.html"
                })
                .state("app.about.google-analitics", {
                    url: "/google-analitics",
                    controller: "GoogleAnaliticsCtrl",
                    templateUrl: "scripts/sections/about/views/google-analiticsCtrl.html"
                })
        });
})();
