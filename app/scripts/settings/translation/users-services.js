(function () {
    'use strict'

    angular.module('app')
        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useCookieStorage();

            $translateProvider.translations('en', {
                'reader-profile':'Reader Profile',
                'subscriptions':'Subscriptions',

                'settings':'Settings',
                'logout':'Logout'
            });

            $translateProvider.translations('ru', {
                'reader-profile':'Профайл Читателя',
                'subscriptions':'Подписка',
                'settings':'Настройки',
                'logout':'Выйти'

            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
