(function () {
    'use strict'

    angular.module('app')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.translations('en', {
                'Home': 'Home Page',
                'FOO': 'This is a paragraph'
            });

            $translateProvider.translations('ru', {
                'Home': 'Домашняя страница',
                'FOO': 'Это параграф!'
            });

            $translateProvider.preferredLanguage('ru');
        }]);

})();
