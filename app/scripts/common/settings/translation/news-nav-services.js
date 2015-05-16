(function () {
    'use strict'
    angular.module('app')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useCookieStorage();
            $translateProvider.translations('en', {
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
