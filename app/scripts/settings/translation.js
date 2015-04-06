(function () {
    'use strict'

    angular.module('app')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.translations('en', {
                'Home': 'Home Page',
                'Politics': 'Politics',
                'Money': 'We and Money',
                'Culture': 'Culture',
                'Society': 'Society',
                'World': 'World',

                'classified': 'Classified',
                'contacts': 'Svet Contacts',


                'youtube': 'Youtube Сhannel',
                'svetApp': 'Svet Local App'

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


                'youtube': 'Youtube Канал',
                'svetApp': 'Приложение Svet'
            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
