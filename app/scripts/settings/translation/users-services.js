(function () {
    'use strict'

    angular.module('app')
        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useCookieStorage();

            $translateProvider.translations('en', {
                'reader-profile':'Reader Profile',
                'reader-profile-settings':'Reader Profile Settings',
                'activity-events':'Activity and Events',
                'subscriptions':'Subscriptions',
                'my-classified':'My Classified',
                'profile-settings':'Profile Settings',
                'logout':'Logout'
            });

            $translateProvider.translations('ru', {
                'reader-profile':'Профайл Читателя',
                'reader-profile-settings':'Настройки Профайла Читателя',
                'activity-events':'События и Мероприятия',
                'subscriptions':'Подписки ',
                'my-classified':'Мои Объявления',
                'profile-settings':'Настройки Профайла',
                'logout':'Выйти'

            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
