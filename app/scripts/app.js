(function () {
    'use strict';

    angular.module('app', [

        // modules
		'archive',
		'events',
		'admin',
		'world',
		'social',
		'society',
		'culture',
		'money',
        'classified',
        'contact',
        'article',
        'auth',
        'politics',

        'home',
        // 3rd party modules
        'ngCookies',

        'ngAnimate',
        'flow',
        'ngSanitize',
        'pascalprecht.translate',
        'lumx',
        'ngMaterial',
        'toastr',
        'firebase',
        'mwl.calendar',
        'ui.router'

        //'ui.bootstrap',
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
                .accentPalette('red');8

        }).factory('$exceptionHandler', function ($injector) {
            return function (exception, cause) {
                var $rootScope = $injector.get('$rootScope');
                var toastr = $injector.get('toastr');
                exception.message += ' (caused by "' + cause + '")';
                toastr.error('ERROR!'+exception.message);
                $rootScope.$broadcast('error');

                throw exception;
            };
        })

})();
