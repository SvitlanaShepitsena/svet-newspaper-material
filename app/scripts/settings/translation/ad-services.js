(function () {
    'use strict'

    angular.module('app')
        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useCookieStorage()

            $translateProvider.translations('en', {
                'add-business-ad':'Start Campaign'

            });

            $translateProvider.translations('ru', {
                'add-business-ad':'Начать Кампанию'
            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
