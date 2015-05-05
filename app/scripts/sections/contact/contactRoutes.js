(function () {
    'use strict'
    angular.module('sections.contact', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            /*=moduleName*/
                .state("app.contact", {
                    url: "/contact",
                    controller: "ContactCtrl as contact",
                    templateUrl: "sections/contact/views/contactCtrl.html"
                })
//#state'
        });
})();
