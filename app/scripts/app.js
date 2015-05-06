(function () {
    'use strict';
    angular.module('app', [
        // modules
        'pascalprecht.translate',
        'auth',
        'firebase',
        'ngMaterial',
        'auth.user',
        'auth.manager',
        'ad.classified',
        'ad.promotion',
        'sections.header',
        'auth.notifications',
        'sections.archive',
        'sections.radio',
        'sections.widgets',
        'sections.contact',
        'events',
        'article',
        'common',
        'sections.home',
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
        'mwl.calendar',
        'ui.router'
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
            8
        })
     //COMMENT ON PRODUCTION
        .factory('$exceptionHandler', function ($injector) {
            return function (exception, cause) {
                var $rootScope = $injector.get('$rootScope');
                var toastr = $injector.get('toastr');
                console.error(exception.stack);

                // Comment on Production
                toastr.error('ERROR!'+exception.stack); $rootScope.$broadcast('error');
                //throw exception;
            };
        }).config(['$compileProvider', function ($compileProvider) {
        //$compileProvider.debugInfoEnabled(false);
    }]);
})();
