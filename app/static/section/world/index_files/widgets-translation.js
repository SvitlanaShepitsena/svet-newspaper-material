(function () {
    'use strict'
    angular.module('sections.widgets')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useCookieStorage();
            $translateProvider.translations('en', {
                'weather': 'Chicago weather',
                'forecast': 'Weekly Forecast',
                'degrees': 'F',
                'Tomorrow': 'Tomorrow',
                'Monday': 'Monday',
                'Tuesday': 'Tuesday',
                'Wednesday': 'Wednesday',
                'Thursday': 'Thursday',
                'Friday': 'Friday',
                'Saturday': 'Saturday',
                'Sunday': 'Sunday'
            });
            $translateProvider.translations('ru', {
                //    weather
                'weather': 'Погода в Чикаго',
                'forecast': 'Прогноз на Неделю',
                'degrees': 'C',
                'Tomorrow': 'Завтра',
                'Monday': 'Понедельник',
                'Tuesday': 'Вторник',
                'Wednesday': 'Среда',
                'Thursday': 'Четверг',
                'Friday': 'Пятница',
                'Saturday': 'Суббота',
                'Sunday': 'Воскресенье'
            });
            $translateProvider.preferredLanguage('en');
        }]);
})();
