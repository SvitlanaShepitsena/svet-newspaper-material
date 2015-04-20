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
                'no-classified-yet':'You do not have any classified yet',
                'free-classified':'You can Post 3 Classified for Free',
                'start-posting-classified':'Start Posting Classified Now',
                'add-classified':'Add Classified',
                'bonuses':'Bonuses',
                'logout':'Logout'
            });

            $translateProvider.translations('ru', {
                'reader-profile':'Профайл Читателя',
                'reader-profile-settings':'Настройки Профайла Читателя',
                'activity-events':'События и Мероприятия',
                'subscriptions':'Подписки ',
                'my-classified':'Мои Объявления',
                'profile-settings':'Настройки Профайла',
                'no-classified-yet':'У Вас пока нет объявлений',
                'add-classified':'Добавить Объявление',
                'free-classified':'Вы можете разместить 3 бесплатных объявления',
                'start-posting-classified':'Создать Объявление',
                'bonuses':'Бонусы',
                'logout':'Выйти'

            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
