(function () {
    'use strict'
    angular.module('auth', [])
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useCookieStorage()
            $translateProvider.translations('en', {
            });
            $translateProvider.translations('ru', {
            });
            $translateProvider.preferredLanguage('en');
        }]);
})();
