(function () {
    'use strict'

    angular.module('app')
        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useCookieStorage();

            $translateProvider.translations('en', {
                'dashboard': 'Dashboard',
                'my-profile': 'My Profile',
                'my-ad': 'My Advertisement',
                'ad': 'Advertisement',
                'my-articles': 'My Articles',
                'my-drafts': 'Drafts',
                'my-friends': 'My Friends',
                'svet-friends': 'Svet Friends',
                'create:article': 'Create Article',
                'settings': 'Settings',
                'statistics': 'Statistics',
                'comments': 'Comments',
                'bookmarks': 'Bookmarks',

                'manager-dashboard': 'Manager Dashboard',
                'users': 'Users',
                'all-users': 'All Users',
                'clients': 'Clients',
                'readers': 'Readers',
                'customers': 'Customers',
                'authors': 'Authors',
                'reader-profile': 'Reader Profile',
                'reader-profile-settings': 'Reader Profile Settings',
                'activity-events': 'Activity and Events',
                'visited-events': 'Visited Events',
                'planned-events': 'Planned Events',
                'create-event': 'Create an Event',
                'invitations': 'Invitations',
                'find-people': 'Find People',
                'subscriptions': 'Subscriptions',
                'my-classified': 'My Classified',
                'profile-settings': 'Profile Settings',
                'no-classified-yet': 'You do not have any classified yet',
                'free-classified': 'You can Post 3 Classified for Free',
                'start-posting-classified': 'Start Posting Classified Now',
                'add-classified': 'Add Classified',
                'bonuses': 'Bonuses',
                // Forms
                // Register

                'required-field': '* Required Field',
                'min-length': '* Minimum length 3 symbols',
                'max-length': '* Maximum length 20 symbols',
                'invalid-email': '* Please enter a valid email',
                'invalid-password': '* Your password must be between 6 and 12 characters long',
                'login': 'Login',
                'logout': 'Logout',

                //    Change Fields
                'fname': 'First Name',
                'lname': 'Last Name',
                'uname': 'User Name'

            });

            $translateProvider.translations('ru', {
                'dashboard': 'Панель Управления',
                'my-profile': 'Мой Профайл',
                'my-ad': 'Моя Реклама',
                'ad': ' Реклама',
                'my-articles': 'Мои Статьи',
                'my-drafts': 'Черновики',
                'my-friends': 'Мои Друзья',
                'svet-friends': 'Друзья Svet ',
                'create-article': 'Создать статью',
                'settings': 'Настройки',
                'comments': 'Комментарии',
                'bookmarks': 'Закладки',

                'manager-dashboard': 'Панель Управления Менеджера',
                'users': 'Юзеры',
                'all-users': 'Все Юзеры',
                'clients': 'Клиенты',
                'readers': 'Читатели',
                'customers': 'Клиенты',
                'authors': 'Авторы',
                'reader-profile': 'Профайл Читателя',
                'reader-profile-settings': 'Настройки Профайла Читателя',
                'activity-events': 'События и Мероприятия',
                'visited-events': ' Посещенные Мероприятия',
                'planned-events': 'Запланированные  Мероприятия',
                'create-event': 'Создать Мероприятие',
                'invitations': 'Приглашения',
                'find-people': 'Поиск Людей',
                'subscriptions': 'Подписки',
                'my-classified': 'Мои Объявления',
                'profile-settings': 'Настройки Профайла',
                'no-classified-yet': 'У Вас пока нет объявлений',
                'add-classified': 'Добавить Объявление',
                'free-classified': 'Вы можете разместить 3 бесплатных объявления',
                'start-posting-classified': 'Создать Объявление',
                'bonuses': 'Бонусы',

                // Forms
                // Register
                'required-field': '* Обязательное Поле',
                'min-length': '* Минимум 3 символа',
                'max-length': '* Максимум  20 символов',
                'invalid-email': '* Пожалуйста, введите корректный адрес',
                'invalid-password': '* Ваш пароль должен содержать от 6 до 20 символов',
                'logout': 'Выйти',
                'login': 'Войти',

                //    Change Fields
                'fname': 'Имя',
                'lname': 'Фамилия',
                'uname': 'Ник'

            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
