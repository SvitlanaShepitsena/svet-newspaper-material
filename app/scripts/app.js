(function () {
    'use strict';

    angular.module('app', [

        // modules
		'social',
		'world',
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
        'ngAnimate',
        'flow',
        'ngTouch',
        'ngSanitize',
        'ng-fastclick',
        'lumx',
        'ngMaterial',
        'toastr',
        'firebase',
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
