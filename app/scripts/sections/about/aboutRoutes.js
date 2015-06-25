				.state("app.about-tab-content", {
					url: "/about-tab-content", 
					controller:"AboutTabContentCtrl",
					templateUrl: "scripts/sections/about/views/about-tab-contentCtrl.html"
				})
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
                .state("app.about.svet", {
                    url: "/about-svet-russian-media-group",
                    templateUrl: "scripts/sections/about/views/about-tab-content.html"
                })
                .state("app.about.demographics", {
                    url: "/demographics",
                    templateUrl: "scripts/sections/about/views/demographicsTabsContent.html"
                })
        });
})();

