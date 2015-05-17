(function () {
    'use strict'

    angular.module('ad.promotion')
        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useCookieStorage()

            $translateProvider.translations('en', {
                'business-promotion': 'Business Promotion',
                'add-business-ad':'Start New Campaign'

            });

            $translateProvider.translations('ru', {
                'business-promotion': 'Продвижение Вашего Бизнеса',
                'add-business-ad':'Начать Новую Кампанию'
            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
