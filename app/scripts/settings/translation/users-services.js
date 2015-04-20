(function () {
    'use strict'

    angular.module('app')
        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useCookieStorage();

            $translateProvider.translations('en', {
                'reader-profile':'Activity and Events',
                'subscriptions':'My Subscriptions',

                'settings':'Settings',
                'logout':'Logout'
            });

            $translateProvider.translations('ru', {
                'reader-profile':'События и Мероприятия',
                'subscriptions':'Мои Подписки ',
                'settings':'Настройки',
                'logout':'Выйти'

            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
