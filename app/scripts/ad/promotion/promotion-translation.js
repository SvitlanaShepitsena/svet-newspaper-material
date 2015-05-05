(function () {
    'use strict'

    angular.module('ad.promotion')
        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useCookieStorage()

            $translateProvider.translations('en', {
                'add-business-ad':'Start New Campaign'

            });

            $translateProvider.translations('ru', {
                'add-business-ad':'Начать Новую Кампанию'
            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
