(function () {

    angular.module('app', [
        // modules
        'ui.router',
        'ngFileUpload',
        'pascalprecht.translate',
        'underscore.string',
        'auth',
        'ezfb',
        'ad',
        'ngMaterial',
        'ngDragDrop',
        'textAngular',
        'blogs',
        'auth.user',
        'auth.manager',
        'auth.notifications',
        'ad.classified',
        'ad.promotion',
        'article',
        'events',
        'common',
        'sections.header',
        'sections.about',
        'sections.demographics',
        'sections.archive',
        'sections.home',
        'sections.contact',
		'sections.testimonials',
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
        'ui.sortable'
    ])

        .config(function (ezfbProvider) {
            ezfbProvider.setInitParams({
                //appId: '258826184311868',
                appId: '1405000443143632',
                xfbml: true,
                version: 'v2.3'
            });
        })
        .config(function ($mdThemingProvider, $mdIconProvider, $compileProvider) {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|mms):/);
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
        .config(function ($sceProvider, $translateProvider) {
            $translateProvider.useSanitizeValueStrategy(null);
            //$sceProvider.enabled(false);
            /*radio programs*/
        })
        //// COMMENT ON PRODUCTION
        .factory('$exceptionHandler', function ($injector) {
            return function (exception, cause) {
                var $rootScope = $injector.get('$rootScope');
                var toastr = $injector.get('toastr');
                exception.message = exception.stack;

                //Comment on Production
                toastr.error('ERROR!' + exception.message);
                $rootScope.$broadcast('error');
                throw exception;
            };
        })
        .config(['$compileProvider', function ($compileProvider) {
            //$compileProvider.debugInfoEnabled(false);
        }]);
})();
