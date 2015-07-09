(function () {
    'use strict'
    angular.module('ad.promotion')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useCookieStorage()
            $translateProvider.translations('en', {
                'business-promotion': 'Business Promotion',
                'back-to-my-campaigns': 'Back to my Campaigns',
                'my-business-promotion': 'My Business Promotion',
                'add-business-ad': 'Start New Campaign',
                'business-ad': 'Business Advertisement',
                'ad': 'Advertisement',
                'my-ad': 'My Advertisement',
                'my-ad-campaign': 'My Advertisement Campaign',
                'campaign-name': 'Campaign Name',
                'ad-place': 'Advertisement Place',
                'www': 'Company Web Site',
                'advertise-with-us': 'Advertise with us!',
                'anchor': 'Outbound Anchor Text'

            });
            $translateProvider.translations('ru', {
                'business-promotion': 'Продвижение Вашего Бизнеса',
                'back-to-my-campaigns': 'Вернуться к моим кампаниям',
                'my-business-promotion': 'Продвижение Моего Бизнеса',
                'add-business-ad': 'Начать Новую Кампанию',
                'business-ad': 'Бизнес',
                'ad': 'Рекламная служба',
                'my-ad': 'Объявления',
                'my-ad-campaign': 'Моя Рекламная Кампания',
                'campaign-name': 'Название Кампании',
                'ad-place': 'Место показа рекламы',
                'advertise-with-us': 'Продвигайте бизнес с нами!',

                'www': 'Сайт компании',
                'anchor': 'Текст Ссылки'
            });
            $translateProvider.preferredLanguage('en');
        }]);
})();
