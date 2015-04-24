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
                        user: function (AuthServ, $rootScope) {
                            return AuthServ.getUser();
                        },
                        news: function (ArticleServ, $rootScope) {
                            return ArticleServ.allObjRef();
                        }
                    },
                    template: "<div ui-view=''></div>"
                })
                .state("app.home", {
                    url: "/home",
                    controller: "HomeCtrl as home",
                    templateUrl: "scripts/home/views/homeCtrl.html"
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
                .state("app.article", {
                    url: "/article/:id",
                    controller: "ArticleCtrl as article",
                    templateUrl: "scripts/article/views/articleCtrl.html"
                })
                .state("app.contact", {
                    url: "/contact",
                    controller: "ContactCtrl as contact",
                    templateUrl: "scripts/contact/views/contactCtrl.html"
                })
                .state("app.classified", {
                    url: "/classified",
                    controller: "ClassifiedCtrl as classified",
                    templateUrl: "scripts/classified/views/classifiedCtrl.html"
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

                /* =Events*/
                .state("app.events", {
                    url: "/events",
                    abstract: true,
                    controller: "EventsCtrl as events",
                    templateUrl: "scripts/events/views/eventsCtrl.html"
                })
                .state("app.events.calendar", {
                    url: "/event-calendar",
                    controller: "EventCalendarCtrl as eventCalendar",
                    templateUrl: "scripts/events/views/event-calendarCtrl.html"
                })
                .state("app.events.field", {
                    url: "/events/field-event/:year",
                    controller: "FieldEventCtrl as fieldEvent",
                    templateUrl: "scripts/events/views/field-eventCtrl.html"
                })
                .state("app.events.ravinia", {
                    url: "/ravinia-event",
                    controller: "RaviniaEventCtrl as raviniaEvent",
                    templateUrl: "scripts/events/views/ravinia-eventCtrl.html"
                })
                .state("app.events.photo-gallery", {
                    url: "/events-photo-gallery",
                    controller: "EventsPhotoGalleryCtrl as eventsPhotoGallery",
                    templateUrl: "scripts/events/views/events-photo-galleryCtrl.html"
                })
                /*=archive*/
                .state("app.new-light-newspaper", {
                    url: "/new-light-newspaper",
                    controller: "NewLightNewspaperCtrl as newLightNewspaper",
                    templateUrl: "scripts/archive/views/new-light-newspaperCtrl.html"
                })
                .state("app.saturday-plus-newspaper", {
                    url: "/saturday-plus-newspaper",
                    controller: "SaturdayPlusNewspaperCtrl as saturdayPlusNewspaper",
                    templateUrl: "scripts/archive/views/saturday-plus-newspaperCtrl.html"
                })
                .state("app.svet-recommends", {
                    url: "/svet-recommends",
                    controller: "SvetRecommendsCtrl as svetRecommends",
                    templateUrl: "scripts/article/views/svet-recommendsCtrl.html"
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

				.state("app.manager-ad", {
					url: "/manager-ad", 
					controller:"ManagerAdCtrl as managerAd",
					templateUrl: "scripts/auth/views/manager-adCtrl.html"
				})
//#state'
        });

})();