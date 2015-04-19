(function () {
    'use strict'

    angular.module('app')
        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useCookieStorage();

            $translateProvider.translations('en', {
                'reader-profile':'Reader Profile',
                'settings':'Settings',
                'logout':'Logout'
            });

            $translateProvider.translations('ru', {
                'reader-profile':'Профайл Читателя',
                'settings':'Настройки',
                'logout':'Выйти'

            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
