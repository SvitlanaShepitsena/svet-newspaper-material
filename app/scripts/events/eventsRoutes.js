(function () {
    'use strict'
    angular.module('events', ['ui.router','ui.bootstrap','mwl.calendar','ui.bootstrap.tpls'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=events*/
                .state("app.manager.create-event", {
                    url: "/create-event",
                    controller: "CreateSvetEventCtrl as createSvetEvent",
                    templateUrl: "scripts/events/views/create-svet-eventCtrl.html"
                })
                .state("app.manager.events", {
                    url: "/events",
                    controller: "ManagerEventsCtrl as managerEvents",
                    templateUrl: "scripts/events/views/manager-eventsCtrl.html"
                })
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
				.state("app.one-event", {
					url: "/one-event/:eid",
					controller:"OneEventCtrl",
					templateUrl: "scripts/events/views/one-eventCtrl.html"
				})
//#state'
        });
})();
