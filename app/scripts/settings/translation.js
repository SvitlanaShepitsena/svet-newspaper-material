(function () {
    'use strict'

    angular.module('app')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.translations('en', {
                'Home': 'Home Page'
            });

            $translateProvider.translations('ru', {
                'Home': 'Домашняя страница'
            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
