(function () {
    'use strict'
    angular.module('ad.classified')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useCookieStorage();
            $translateProvider.translations('en', {
                'classified': 'Classified',
                'svet-classified': 'Svet Classified',
                'watch-all-svet-classified': 'Watch All Svet Classified',
                'classified-section': 'Classified Section',
                'last-classified': 'Last Classified',
                'community': 'Community',
                'job': 'Job',
                'sale': 'For Sale',
                'services': 'Services',
                'cars': 'Cars',
                'housing': 'Housing',
                'personal': 'Personal',
                'lessons': 'Lessons',
                'my-classified': 'My Classified',
                'new-classified': 'New Classified',
                'no-classified-yet': 'You do not have any classified yet',
                'free-classified': 'You can Post for Free ',
                'start-posting-classified': 'Start Posting Classified Now',
                'add-classified': 'Add Classified',
                'back-to-my-classified': 'Back to my classified',
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
                'classified': 'Частные Объявления',
                'svet-classified': 'Частные Объявления',
                'watch-all-svet-classified': 'Смотреть Все Частные Объявления',
                'classified-section': 'Раздел  Объявления',
                'last-classified': 'Свежее Объявление',
                'community': 'Сообщество',
                'job': 'Работа',
                'lessons': 'Уроки',
                'sale': 'Продажа',
                'services': 'Услуги',
                'cars': 'Авто',
                'housing': 'Недвижимость',
                'personal': 'Знакомства',
                'my-classified': 'Мои Объявления',
                'new-classified': 'Новое объявление',
                'no-classified-yet': 'У Вас пока нет объявлений',
                'add-classified': 'Добавить Объявление',
                'back-to-my-classified': 'Вернуться к моим объявлениям',
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
