(function () {
    'use strict'

    angular.module('app')
        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useCookieStorage();

            $translateProvider.translations('en', {
                'Home': 'Home Page',
                'Politics': 'Politics',
                'Money': 'Money',
                'Culture': 'Culture',
                'Society': 'Society',
                'World': 'World',
                'read-more': 'Read more',

                'classified': 'Classified',
                'contacts': 'Svet Contacts',
                'youtube': 'Youtube Сhannel',

                'loading': 'Loading News',
                'login-title': 'Log In to Your Account',
                'not-registered': 'Not Registered',
                'already-registered': 'Already registered?',
                'registration': 'Registration',
                'login': 'Login',

                'dashboard': 'Dashboard',
                'my-articles': 'My Articles',
                'my-drafts': 'My Drafts',
                'create:article': 'Create Article',
                'settings': 'Settings',
                'logout': 'Logout',
                'statistics': 'Statistics',
                'comments': 'Comments',
                'bookmarks': 'Bookmarks',
                'listen': 'Listen',
                'archive': 'Archive',

                /*Classified*/
                'community': 'Community',
                'work': 'Work',
                'sell': 'Sell',
                'services': 'Services',
                'cars': 'Cars',
                'housing': 'Housing',
                'personal': 'Personal',
                'lessons': 'Lessons',
                'svetApp': 'Svet Local App',
                /*Footer*/
                'all-rights-reserved': 'All rights reserved'
            });

            $translateProvider.translations('ru', {
                'Home': 'Домашняя страница',
                'Politics': 'Политика',
                'Money': 'Мы и Деньги',
                'Culture': 'Культура',
                'Society': 'Общество',
                'World': 'Мир',

                'classified': 'Частные Объявления',
                'contacts': 'Обратная связь',


                'loading': 'Загрузка Новостей',
                'login:title': 'Авторизация Svet Media Group',
                'not:registered': 'Не зарегистрированы?',
                'already-registered': 'Уже зарегистрированы?',
                'registration': 'Регистрация',
                'login': 'Войти',

                'dashboard': 'Панель Управления',
                'my-articles': 'Мои Статьи',
                'my-drafts': 'Мои Черновики',
                'create-article': 'Создать статью',
                'settings': 'Настройки',
                'logout': 'Выйти',
                'statistics': 'Статистика',
                'comments': 'Комментарии',
                'bookmarks': 'Закладки',
                'read-more': 'Подробнее',

                'youtube': 'Youtube Канал',
                'svetApp': 'Приложение Svet',
                'listen': 'Cлушать',
                'archive': 'Архив',

                /*Classified*/
                'community': 'Община',
                'work': 'Работа',
                'sell': 'Продажа',
                'services': 'Услуги',
                'cars': 'Авто',
                'housing': 'Недвижимость',
                'personal': 'Знакомства',
                'lessons': 'Уроки',
                /*Footer*/
                'all-rights-reserved': 'Все права защищены'
            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
