(function () {
    'use strict'

    angular.module('sections.radio')
        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useCookieStorage();

            $translateProvider.translations('en', {
               // 'eng':'eng'
               // 'eng':'eng',
            });

            $translateProvider.translations('ru', {
               // 'ru':'ru'
               // 'ru':'ru',
            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
