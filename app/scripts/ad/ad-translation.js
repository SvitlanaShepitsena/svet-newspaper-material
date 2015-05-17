(function () {
    'use strict'
    angular.module('common')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useCookieStorage();
            $translateProvider.translations('en', {
                'business-promotion': 'Business Promotion',
                'add-business-ad':'Start New Campaign',
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
                'price': 'Price'
            });
            $translateProvider.translations('ru', {
                'business-promotion': 'Продвижение Вашего Бизнеса',
                'add-business-ad':'Начать Новую Кампанию',
                'my-classified': 'Мои Объявления',
                'no-classified-yet': 'У Вас пока нет объявлений',
                'add-classified': 'Добавить Объявление',
                'free-classified': 'Вы можете разместить бесплатно',
                'start-posting-classified': 'Создать Объявление ',
                'bonuses': 'Бонусы',
                'contact-name': 'Contact Name',
                'contact-phone': 'Contact Phone',
                'contact-email': 'Contact Email',
                'state': 'State',
                'city': 'City',
                'classified-title': 'Classified Title',
                'classified-description': 'Classified Description',
                'price': 'Price'
            });
            $translateProvider.preferredLanguage('en');
        }]);
})();

