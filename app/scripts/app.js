(function () {
    'use strict';
    angular.module('app', [
        // modules
        'pascalprecht.translate',
        'ngMaterial',
        'ngDragDrop',
        'textAngular',
        'auth',
        'auth.user',
        'auth.manager',
        'auth.notifications',
        'ad.classified',
        'ad.promotion',
        'article',
        'events',
        'common',
        'sections.header',
        'sections.archive',
        'sections.home',
        'sections.contact',
        'sections.radio',
        'sections.widgets',
        // 3rd party modules
        'ngCookies',
        'angular-capitalize-filter',
        'ngAnimate',
        'flow',
        'ngSanitize',
        'lumx',
        'ngMessages',
        'ngTouch',
        'toastr',
        'firebase',
        'mwl.calendar',
        'ui.router',
        'ui.bootstrap'
    ])
        .config(function ($mdThemingProvider, $mdIconProvider) {
            $mdIconProvider
                .defaultIconSet("./assets/svg/avatars.svg", 128)
                .icon("menu", "./assets/svg/menu.svg", 24)
                .icon("share", "./assets/svg/share.svg", 24)
                .icon("google_plus", "./assets/svg/google_plus.svg", 512)
                .icon("hangouts", "./assets/svg/hangouts.svg", 512)
                .icon("twitter", "./assets/svg/twitter.svg", 512)
                .icon("phone", "./assets/svg/phone.svg", 512);
            $mdThemingProvider.theme('default')
                .primaryPalette('grey')
                .accentPalette('red');
        })
        .config(function ($sceProvider) {
            $sceProvider.enabled(false);
        })
        // COMMENT ON PRODUCTION
        .factory('$exceptionHandler', function ($injector) {
            return function (exception, cause) {
                var $rootScope = $injector.get('$rootScope');
                var toastr = $injector.get('toastr');
                exception.message = exception.stack;
                // Comment on Production
                //toastr.error('ERROR!' + exception.message);
                //$rootScope.$broadcast('error');
                //throw exception;
            };
        }).config(['$compileProvider', function ($compileProvider) {
            $compileProvider.debugInfoEnabled(false);
        }]);
})();
