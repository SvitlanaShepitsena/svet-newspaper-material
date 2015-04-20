(function () {
    'use strict'

    angular.module('app')
        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useCookieStorage();

            $translateProvider.translations('en', {

                'Chicago': 'Chicago',
                'Home': 'Home Page',
                'Politics': 'Politics',
                'Business': 'Business',
                'WorldNews': 'World News',
                'Technology': 'Technology',
                'Art': 'Art',
                'Sport': 'Sport',
                'Health': 'Health',
                'Food': 'Food',
                'Travel': 'Travel',
                'SvetRecommends': 'Svet Recommends',
                'SvetEventsCalendar': 'Svet Events Calendar 2015',
                'upcoming-svet-event': 'Upcoming Svet Event',
                'event-ad-title': 'Family Public Event',
                'event-ad-body': 'A very special and fun SVET Family Event at Kohl Children\'s Museum on May 5.',
                'families-event': 'Families are goings',
                'join-tip': 'Click to register for visiting this event',
                'unlink-tip': 'Click to un-register from visiting this event',

                //widgets
                //    weather
                'weather': 'Chicago weather',
                'forecast': 'Weekly Forecast',
                'degrees':'F',

                'Tomorrow':'Tomorrow',
                'Monday':'Monday',
                'Tuesday':'Tuesday',
                'Wednesday':'Wednesday',
                'Thursday':'Thursday',
                'Friday':'Friday',
                'Saturday':'Saturday',
                'Sunday':'Sunday',



                'join': 'Register',
                'unlink': 'Un-register',
                'share': 'Share',
                'NewSvetNewspaper': 'New Svet Newspaper',
                'SaturdayPlus': 'Saturday+ Newspaper',
                'PdfNewspaperArchive': 'PDF NEWSPAPER ARCHIVE',
                'svet-on-social-media': 'svet on social media',
                'radio': 'Radio',
                'radio-subhead': ' Sunday morning talk show with Alex Etman.',
                'radio-body': 'Every Sunday on 1240AM from 11:00 a.m. to 1:00 p.m.',

                'classified': 'Classified',
                'contacts': 'Contact Us',
                'youtube': 'Youtube Сhannel',

                'loading': 'Loading News',
                'login-title': 'Log In to Your Account',
                'not-registered': 'Not Registered',
                'name': 'Name',
                'email': 'Email',
                'password': 'Password',
                'register': 'Register',
                'register-account': 'Please Register',
                'new-user': 'if you do not have an account',
                'by-registering': 'By clicking Register',
                'registering-conditions': 'you agree to our Data Policy',
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
                'read-more': 'Read More',
                'listen': 'Listen',
                'archive': 'Archive',
                'from-the-editor': 'FROM THE EDITOR',
                'from-the': 'From the',
                'editor': 'Editor',
                'interesting-stories': 'Interesting Stories',

                /*Classified*/
                'community': 'Community',
                'job': 'Job',
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
                'Chicago': 'Чикаго',
                'Politics': 'Политика',
                'Business': 'Бизнес',
                'WorldNews': 'Новости Мира',
                'Technology': 'Технологии',
                'Art': 'Культура',
                'Sport': 'Спорт',
                'Health': 'Здоровье ',
                'Food': 'Кушать подано',
                'Travel': 'Вокруг Света',
                'SvetRecommends': 'Свет Рекомендует',
                'SvetEventsCalendar': 'Календарь Мероприятий \'15',
                'upcoming-svet-event': 'Свет Приглашает',
                'event-ad-title': 'Семейное Мероприятие.',
                'event-ad-body': '5 Мая Свет пгиглашает на увлекательное мероприятие для всей семьи в Детском Музее Kohl.',
                'families-event': 'Семей Придут',
                'join-tip': 'Кликните чтобы зарегистрироваться',
                'unlink-tip': 'Отменить регистрацию на посещение',

                'join': 'Присоединиться',
                'unlink': 'Отменить',
                'share': 'Поделиться',
                'NewSvetNewspaper': 'Газета Новый Свет',
                'SaturdayPlus': 'Суббота+',
                'PdfNewspaperArchive': 'PDF Архив Газеты',
                'svet-on-social-media': 'Свет в медиа',
                'radio': 'Радио',
                'radio-subhead': 'В воскресенье утром ток-шоу с Александром Етманом.',
                'radio-body': 'Каждое воскресенье на 1240AM с 11:00 до 1:00 вечера.',


                //widgets
                //    weather
                'weather': 'Погода в Чикаго',
                'forecast': 'Прогноз на Неделю',
                'degrees':'C',

                'Tomorrow':'Завтра',
                'Monday':'Понедельник',
                'Tuesday':'Вторник',
                'Wednesday':'Среда',
                'Thursday':'Четверг',
                'Friday':'Пятница',
                'Saturday':'Суббота',
                'Sunday':'Воскресенье',

                'classified': 'Частные Объявления',
                'contacts': 'Обратная связь',


                'loading': 'Загрузка Новостей',
                'login-title': 'Вход',
                'login:title': 'Авторизация Svet Media Group',
                'not:registered': 'Не зарегистрированы',
                'name': 'Контактное Имя',
                'email': 'Электронный Адрес',
                'password': 'Пароль',
                'register': 'Зарегистрироваться',
                'register-account': 'Зарегистрируйтесь',
                'new-user': 'если Вы новый пользователь',
                'by-registering': 'Регистрируясь, вы принимаете',
                'registering-conditions': 'условия лицензионного договора',
                'already-registered': 'Уже зарегистрированы',
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
                'from-the-editor': 'От Редактора',
                'from-the': 'От',
                'editor': 'Редактора',
                'interesting-stories': 'Интерестные Истории',

                /*Classified*/
                'community': 'Община',
                'job': 'Работа',
                'lessons': 'Уроки',
                'sell': 'Продажа',
                'services': 'Услуги',
                'cars': 'Авто',
                'housing': 'Недвижимость',
                'personal': 'Знакомства',
                /*Footer*/
                'all-rights-reserved': 'Все права защищены'
            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
