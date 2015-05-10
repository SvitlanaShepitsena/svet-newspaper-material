(function () {
    'use strict'
    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state("app", {
                    abstract: true,
                    controller: "AppCtrl as app",
                    resolve: {
                        user: function (AuthServ) {
                            return AuthServ.getUser();
                        }
                    },
                    template: "<div ui-view=''></div>"
                })
                .state("app.sign-up", {
                    url: "/sign-up",
                    controller: "SignUpCtrl as signUp",
                    templateUrl: "scripts/auth/views/sign-upCtrl.html"
                })
                .state("app.svet-login", {
                    url: "/svet-login",
                    controller: "SvetLoginCtrl as login",
                    templateUrl: "scripts/auth/views/svet-loginCtrl.html"
                })
//#state'
                .state("app.home", {
                    url: "/home",
                    controller: "HomeCtrl as home",
                    templateUrl: "scripts/sections/home/views/homeCtrl.html"
                })
                /*news sections*/
                .state("app.politics", {
                    url: "/politics",
                    controller: "PoliticsCtrl as politics",
                    templateUrl: "scripts/politics/views/politicsCtrl.html"
                })
                .state("app.culture", {
                    url: "/culture",
                    controller: "CultureCtrl as culture",
                    templateUrl: "scripts/culture/views/cultureCtrl.html"
                })
                .state("app.world", {
                    url: "/world",
                    controller: "WorldCtrl as world",
                    templateUrl: "scripts/world/views/worldCtrl.html"
                })
                .state("app.technology", {
                    url: "/technology",
                    controller: "TechnologyCtrl as technology",
                    templateUrl: "scripts/technology/views/technologyCtrl.html"
                })
                .state("app.art", {
                    url: "/art",
                    controller: "ArtCtrl as art",
                    templateUrl: "scripts/art/views/artCtrl.html"
                })
                .state("app.sport", {
                    url: "/sport",
                    controller: "SportCtrl as sport",
                    templateUrl: "scripts/sport/views/sportCtrl.html"
                })
                .state("app.health", {
                    url: "/health",
                    controller: "HealthCtrl as health",
                    templateUrl: "scripts/health/views/healthCtrl.html"
                })
                .state("app.food", {
                    url: "/food",
                    controller: "FoodCtrl as food",
                    templateUrl: "scripts/food/views/foodCtrl.html"
                })
                .state("app.travel", {
                    url: "/travel",
                    controller: "TravelCtrl as travel",
                    templateUrl: "scripts/travel/views/travelCtrl.html"
                })
                .state("app.business", {
                    url: "/business",
                    controller: "BusinessCtrl as business",
                    templateUrl: "scripts/business/views/businessCtrl.html"
                })
                .state("app.y", {
                    url: "/y",
                    controller: "YCtrl as y",
                    templateUrl: "ad/classified/views/yCtrl.html"
                })
//#state'
        });
})();