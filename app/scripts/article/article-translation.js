(function () {
    'use strict'
    angular.module('article')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useCookieStorage();
            $translateProvider.translations('en', {
                // 'eng':'eng'
                'svetRecommends': 'Svet Recommends',
                'new-article': 'New Article',
                'new-blog-post': 'New Blog Post',
                'news-articles': 'News Articles',
                'add-article': 'Add Article',
                'add-news-article': 'Add News Article',
                'add-blog-post': 'Add Blog Post',
                'save-blog': 'Save Post ',
                'blog': 'Blog',
                'add-blog': 'Add Blog Post',
                'save-to-drafts': 'Save to Drafts',
                'save-to-public': 'Save to Public',
                'save-article': 'Save Article',
                'post-article': 'Post Article',
                'back-to-my-articles': 'Back to My Articles',
                'article-author': 'Article Author',
                'article-title': 'Article Title',
                'article-topic': 'Article Topic',
                'article-summary': 'Article Summary',
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
                'svetRecommends': 'Свет Рекомендует',
                'new-article': 'Новая Статья',
                'new-blog-post': 'Новый блог пост',
                'news-articles': 'Новости',
                'blog': 'Блог',
                'add-article': ' Добавить статью',
                'add-news-article': ' Добавить новость',
                'add-blog-post': 'Добавить блог пост ',
                'add-blog': ' Добавить блог пост ',
                'save-blog': ' Сохранить пост ',
                'save-to-drafts': 'Сохранить в черновики',
                'save-to-public': 'Сохранить и опубликовать',
                'save-article': 'Сохранить статью',
                'post-article': 'Опубликовать статью',
                'back-to-my-articles': 'Вернуться к моим статьям',
                'article-author': 'Автор статьи',
                'article-title': 'Заголовок статьи',
                'article-topic': 'Тема Статьи',
                'article-summary': 'Содержание одним предложением',
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
