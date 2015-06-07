(function () {
    'use strict'
    angular.module('common')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.directivePriority(10);
            $translateProvider.useCookieStorage();
            $translateProvider.translations('en', {
                'chicago': 'Chicago',
                'usa': 'USA',
                /*=form*/
                'login-title': 'Log In to Your Account',
                'not-registered': 'Not Registered',
                'registered-users': 'Registered Users',
                'required-field': '* Required Field',
                'min-length': '* Minimum length 3 symbols',
                'max-length': '* Maximum length 20 symbols',
                'invalid-email': '* Please enter a valid email',
                'username-field': 'This username is already taken',
                'invalid-password': '* Your password must be between 6 and 12 characters long',
                /*=buttons*/
                'quick-look': 'Quick Look',
                'login': 'Login',
                'logout': 'Logout',
                'edit': 'Edit',
                'delete': 'Delete',
                'cancel': 'Cancel',
                'save': 'Save',
                'post': 'Post',
                'hide': 'Hide',
                'share': 'Share',
                'search': 'Search',
                'results': 'Results',
                'add': 'Add',
                'choose-image': 'Choose an Image',
                'remove-image': 'Remove an Image',
                'home-top': 'Home Page Top',
                'home-middle': 'Home Page Middle',
                //    Change Fields
                'fname': 'First Name',
                'lname': 'Last Name',
                'uname': 'User Name'
            });
            $translateProvider.translations('ru', {
                'chicago': 'Чикаго',
                'usa': 'США',
                /*=form*/
                'login-title': 'Вход',
                'quick-look': 'Быстрый просмотр',
                'login:title': 'Авторизация Svet Media Group',
                'not-registered': 'Не зарегистрированы',
                'registered-users': 'Зарегистрировались',
                'required-field': '* Обязательное Поле',
                'min-length': '* Минимум 3 символа',
                'max-length': '* Максимум  20 символов',
                'invalid-email': '* Пожалуйста, введите корректный адрес',
                'username-field': 'Это имя пользователя уже используется',
                'invalid-password': '* Ваш пароль должен содержать от 6 до 20 символов',
                /*=buttons*/
                'logout': 'Выйти',
                'login': 'Войти',
                'edit': 'Править',
                'delete': 'Удалить',
                'cancel': 'Отменить',
                'save': 'Сохранить',
                'post': 'Опубликовать',
                'hide': 'Скрыть',
                'share': 'Поделиться',
                'search': 'Поиск',
                'results': 'Результат',
                'add': 'Добавить',
                'choose-image': 'Выбрать изображение',
                'remove-image': 'Удалить изображение',
                'home-top': 'Наверу домашней страницы',
                'home-middle': 'Внизу домашней страницы',
                //    Change Fields
                'fname': 'Имя',
                'lname': 'Фамилия',
                'uname': 'Имя Пользователя'
            });
            $translateProvider.preferredLanguage('en');
        }]);
})();
