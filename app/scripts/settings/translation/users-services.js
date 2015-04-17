(function () {
    'use strict'

    angular.module('app')
        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useCookieStorage();

            $translateProvider.translations('en', {
                'reader-profile':'Reader Profile'
            });

            $translateProvider.translations('ru', {
                'reader-profile':'Профайл Читателя'

            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
