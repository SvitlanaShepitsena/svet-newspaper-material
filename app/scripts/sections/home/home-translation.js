(function () {
    'use strict'
    angular.module('sections.home')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useCookieStorage();
            $translateProvider.translations('en', {
                'SvetNewspaper': 'Svet Newspaper',
                'for-readers-and-partners': 'For Readers and Partners',
                'new-svet': 'New Svet',
                'saturday-plus': 'Saturday+',
                'PdfNewspaperArchive': 'PDF NEWSPAPER ARCHIVE',
                'svet-on-social-media': 'Svet on social media',
                'radio': 'Radio',
                'radio-subhead': ' Sunday morning talk show with Alex Etman.',
                'radio-body': 'Every Sunday on 1240AM from 11:00 a.m. to 1:00 p.m.',
                'contacts': 'Contact Us',
                'youtube': 'Youtube Сhannel',
                'loading': 'Loading News',
                'read-more': 'Read More',
                'listen': 'Listen',
                'archive': 'Archive',
                'from-the-editor': 'From The Editor',
                'from-the': 'From the',
                'editor': 'Editor',
                'interesting-stories': 'Interesting Stories',
                'svetApp': 'Svet Local App',
                /*=news nav*/
                'home': 'Home Page',
                'politics': 'Politics',
                'business': 'Business',
                'banking': 'Banking',
                'world': 'World News',
                'technology': 'Technology',
                'art': 'Art',
                'sport': 'Sport',
                'health': 'Health',
                'food': 'Food',
                'travel': 'Travel'
            });
            $translateProvider.translations('ru', {
                'SvetNewspaper': 'Газета Свет',
                'for-readers-and-partners': 'Читателям и Партнерам',
                'new-svet': 'Новый Свет',
                'svet-on-social-media': 'Свет в медиа',
                'svetApp': 'Приложение Svet',
                'saturday-plus': 'Суббота+',
                'PdfNewspaperArchive': 'PDF Архив Газеты',
                'radio': 'Радио',
                'radio-subhead': 'В воскресенье утром ток-шоу с Александром Етманом.',
                'radio-body': 'Каждое воскресенье на 1240AM с 11:00 до 1:00 вечера.',
                'contacts': 'Обратная связь',
                'loading': 'Загрузка Новостей',
                'read-more': 'Подробнее',
                'youtube': 'Youtube Канал',
                'listen': 'Cлушать',
                'archive': 'Архив',
                'from-the-editor': 'От Редактора',
                'from-the': 'От',
                'editor': 'Редактора',
                'interesting-stories': 'Интерестные Истории',
                /*=news nav*/
                'home': 'Домашняя страница',
                'politics': 'Политика',
                'business': 'Бизнес',
                'banking': 'Банковское Дело',
                'world': 'Новости Мира',
                'technology': 'Технологии',
                'art': 'Культура',
                'sport': 'Спорт',
                'health': 'Здоровье ',
                'food': 'Кушать подано',
                'travel': 'Вокруг Света'
            });
            $translateProvider.preferredLanguage('en');
        }]);
})();
