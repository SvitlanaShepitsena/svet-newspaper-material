(function () {

    angular.module('app', [
        // modules
        'ui.router',
        'ngFileUpload',
        'seo',
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
        'angulartics',
        'angulartics.google.analytics',
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
        .config(function ($httpProvider,$locationProvider) {
            $locationProvider
                .html5Mode(true)
                .hashPrefix('!');

            var $http,
                interceptor = ['$q', '$injector', function ($q, $injector) {
                    var error;
                    function success(response) {
                        $http = $http || $injector.get('$http');
                        var $timeout = $injector.get('$timeout');
                        var $rootScope = $injector.get('$rootScope');
                        if($http.pendingRequests.length < 1) {
                            $timeout(function(){
                                if($http.pendingRequests.length < 1){
                                    $rootScope.htmlReady();
                                }
                            }, 700);//an 0.7 seconds safety interval, if there are no requests for 0.7 seconds, it means that the app is through rendering
                        }
                        return response;
                    }

                    function error(response) {
                        $http = $http || $injector.get('$http');

                        return $q.reject(response);
                    }

                    return function (promise) {
                        return promise.then(success, error);
                    }
                }];

            $httpProvider.interceptors.push(interceptor);

        })
        //// COMMENT ON PRODUCTION
        //.factory('$exceptionHandler', function ($injector) {
        //    return function (exception, cause) {
        //        var $rootScope = $injector.get('$rootScope');
        //        var toastr = $injector.get('toastr');
        //        exception.message = exception.stack;
        //
        //        //Comment on Production
        //        toastr.error('ERROR!' + exception.message);
        //        $rootScope.$broadcast('error');
        //        throw exception;
        //    };
        //})
        .config(['$compileProvider', function ($compileProvider) {
            $compileProvider.debugInfoEnabled(false);
        }]);
})();
