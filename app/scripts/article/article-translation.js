(function () {
    'use strict'
    angular.module('article')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useCookieStorage();
            $translateProvider.translations('en', {
                // 'eng':'eng'
                'new-article': 'New Article',
                'add-article': 'Add Article',
                'add-blog': 'Add Blog Post',
                'save-to-drafts': 'Save to Drafts',
                'save-article': 'Save Article',
                'post-article': 'Post Article',
                'back-to-my-articles': 'Back to My Articles',
                'article-author': 'Article Author',
                'article-title': 'Article Title',
                'date': 'Date',
                'news-section': 'News Section',
                'article-content': 'Article Content',
                'choose-section': 'Choose Section',
                'upload-img': 'Upload Image',
                'tags': 'Tags',
                'views': 'Views',
                'shares': 'Shares',
                'private': 'Private',
                'public': 'Public'
                // 'eng':'eng',
            });
            $translateProvider.translations('ru', {
                // 'ru':'ru'
                'new-article': 'Новая Статья',
                'add-article': ' Добавить статью',
                'add-blog': ' Добавить блог-пост ',
                'save-to-drafts': 'Сохранить в черновики',
                'save-article': 'Сохранить статью',
                'post-article': 'Опубликовать статью',
                'back-to-my-articles': 'Вернуться к моим статьям',
                'article-author': 'Автор статьи',
                'article-title': 'Заголовок статьи',
                'date': 'Дата',
                'article-content': 'Содержание статьи',
                'choose-section': 'Выберите Тему',
                'news-section': 'Раздел Новостей',
                'upload-img': 'Загрузить фотографию',
                'tags': 'Теги',
                'shares': 'Поделились',
                'views': 'Просмотры',
                'likes': 'Понравилось',
                'private': 'Приватная',
                'public': 'Публичная'
                // 'ru':'ru',
            });
            $translateProvider.preferredLanguage('en');
        }]);
})();
