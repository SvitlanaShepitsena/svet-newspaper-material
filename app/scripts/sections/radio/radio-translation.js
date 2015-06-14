(function () {
    'use strict'

    angular.module('sections.radio')
        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useCookieStorage();

            $translateProvider.translations('en', {
                'radio': 'Radio',
                'radio-subhead-1': ' Radio Talk show',
                'radio-subhead-2': ' With Alexander Etman',
                'alex-etman': ' Alexander Etman',
                'radio-body-1': 'Every Sunday ',
                'radio-body-2': 'on 1240AM',
                'radio-body-3': '11:00 AM - 1:00 PM.',
                'radio-archive': 'Radio Programs Archive',
                'radio-files-archive': 'Archive',
                'back': 'Back',
                // 'eng':'eng'
                // 'eng':'eng',
            });

            $translateProvider.translations('ru', {
                'alex-etman': ' Александр Этман',
                'radio': 'Радио',
                'radio-subhead-1': 'Радио Tок-шоу',
                'radio-subhead-2': 'с Александром Этманом',
                'radio-body-1': 'Каждое воскресенье',
                'radio-body-2': 'на 1240AM',
                'radio-body-3': '11:00 - 13:00 ',
                'radio-archive': 'Архивные передачи',
                'radio-files-archive': 'Архив передач',
                'back': 'Вернуться',
                // 'ru':'ru'
                // 'ru':'ru',
            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
