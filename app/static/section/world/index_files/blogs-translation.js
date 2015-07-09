(function () {
    'use strict'

    angular.module('blogs')
        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useCookieStorage();

            $translateProvider.translations('en', {
               // 'eng':'eng'
                'svet-blog':'SVET Blog'
            });

            $translateProvider.translations('ru', {
               // 'ru':'ru'
                'svet-blog':'SVET Блог'
            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
