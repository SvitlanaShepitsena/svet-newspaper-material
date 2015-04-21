(function () {
    'use strict'

    angular.module('app')
        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useCookieStorage();

            $translateProvider.translations('en', {
                'dashboard': 'Dashboard',
                'my-articles': 'My Articles',
                'my-drafts': 'My Drafts',
                'create:article': 'Create Article',
                'settings': 'Settings',
                'statistics': 'Statistics',
                'comments': 'Comments',
                'bookmarks': 'Bookmarks',

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
                // Forms
                // Register

                'required-field':'* Required Field',
                'min-length':'* Minimum length 3 symbols',
                'max-length':'* Maximum length 20 symbols',
                'invalid-email':'* Please enter a valid email',
                'invalid-password':'* Your password must be between 6 and 12 characters long',
                'logout':'Logout'

            });

            $translateProvider.translations('ru', {
                'dashboard': 'Панель Управления',
                'my-articles': 'Мои Статьи',
                'my-drafts': 'Мои Черновики',
                'create-article': 'Создать статью',
                'settings': 'Настройки',
                'comments': 'Комментарии',
                'bookmarks': 'Закладки',

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

                // Forms
                // Register
                'required-field':'* Обязательное Поле',
                'min-length':'* Минимум 3 символа',
                'max-length':'* Максимум  20 символов',
                'invalid-email':'* Пожалуйста, введите корректный адрес',
                'invalid-password':'* Ваш пароль должен содержать от 6 до 20 символов',
                'logout':'Выйти'

            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
