(function () {
    'use strict'

    angular.module('sections.testimonials', [])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider

                .state("app.testimonials", {
                    url: "/testimonials",
                    controller: "TestimonialsCtrl",
                    templateUrl: "scripts/sections/testimonials/views/testimonialsCtrl.html"
                })
        });
})();

