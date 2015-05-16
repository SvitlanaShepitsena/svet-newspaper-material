(function () {
    'use strict'
    angular.module('common')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useCookieStorage();
            $translateProvider.translations('en', {
                'business-promotion': 'Business Promotion'
                // 'eng':'eng'
                // 'eng':'eng',
            });
            $translateProvider.translations('ru', {
                'business-promotion': 'Продвижение Вашего Бизнеса'
                // 'ru':'ru'
                // 'ru':'ru',
            });
            $translateProvider.preferredLanguage('en');
        }]);
})();

