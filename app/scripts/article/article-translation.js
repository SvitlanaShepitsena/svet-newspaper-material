(function () {
    'use strict'
    angular.module('article')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useCookieStorage();
            $translateProvider.translations('en', {
                // 'eng':'eng'
                'new-article': 'New Article',
                'article-author': 'Article Author',
                'article-title': 'Article Title',
                'news-section': 'News Section',
                'article-content': 'Article Content',
                'upload-img': 'Upload Image',
                'tags': 'Tags'
                // 'eng':'eng',
            });
            $translateProvider.translations('ru', {
                // 'ru':'ru'
                'new-article': 'Новая Статья',
                'article-author': 'Автор статьи',
                'article-title': 'Заголовок статьи',
                'article-content': 'Содержание статьи',
                'news-section': 'Раздел Новостей',
                'upload-img': 'Загрузить фотографию',
                'tags': 'Теги'
                // 'ru':'ru',
            });
            $translateProvider.preferredLanguage('en');
        }]);
})();
