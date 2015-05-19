(function () {
    'use strict'
    angular.module('common')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useCookieStorage();
            $translateProvider.translations('en', {
                'Chicago': 'Chicago',
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
                'login': 'Login',
                'logout': 'Logout',
                'edit': 'Edit',
                'delete': 'Delete',
                'cancel': 'Cancel',
                'post': 'Post',
                'share': 'Share',
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
                /*=form*/
                'login-title': 'Вход',
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
                'post': 'Опубликовать',
                'share': 'Поделиться',
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
