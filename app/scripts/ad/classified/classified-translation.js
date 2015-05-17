(function () {
    'use strict'
    angular.module('ad.classified')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useCookieStorage();
            $translateProvider.translations('en', {
                'my-classified': 'My Classified',
                'no-classified-yet': 'You do not have any classified yet',
                'free-classified': 'You can Post for Free ',
                'start-posting-classified': 'Start Posting Classified Now',
                'add-classified': 'Add Classified',
                'bonuses': 'Bonuses',
                'contact-name': 'Contact Name',
                'contact-phone': 'Contact Phone',
                'contact-email': 'Contact Email',
                'state': 'State',
                'city': 'City',
                'classified-title': 'Classified Title',
                'classified-description': 'Classified Description',
                'price': 'Price',
                'post': 'Post'
            });
            $translateProvider.translations('ru', {
                'my-classified': 'Мои Объявления',
                'no-classified-yet': 'У Вас пока нет объявлений',
                'add-classified': 'Добавить Объявление',
                'free-classified': 'Вы можете разместить бесплатно',
                'start-posting-classified': 'Создать Объявление ',
                'bonuses': 'Бонусы',
                'contact-name': 'Контактное Имя',
                'contact-phone': 'Контактный Телефон',
                'contact-email': 'Контактный Email',
                'state': 'Штат',
                'city': 'Город',
                'classified-title': 'Заголовок объявления',
                'classified-description': 'Содержание объявления',
                'price': 'Цена',
                'post': 'Опубликовать'
            });
            $translateProvider.preferredLanguage('en');
        }]);
})();
