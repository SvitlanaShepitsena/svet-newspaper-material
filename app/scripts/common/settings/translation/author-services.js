(function () {
    'use strict'

    angular.module('app')
        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useCookieStorage();

            $translateProvider.translations('en', {
                'author-dashboard':'Dashboard',
                'author-articles':'My Articles',
                'author-drafts':'My Drafts',
                'create-article': 'Create an Article',
                'statistics': 'Statistics',
                'comments': 'Comments'
            });

            $translateProvider.translations('ru', {
                'author-dashboard':'Панель Управления',
                'author-articles':'Мои Статьи',
                'author-drafts':'Мои Черновики',
                'create-article': 'Создать статью',
                'statistics': 'Статистика',
                'comments': 'Комментарии'
            });

            $translateProvider.preferredLanguage('en');
        }]);

})();
