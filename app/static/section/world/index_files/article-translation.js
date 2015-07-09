(function () {
    'use strict'
    angular.module('article')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useCookieStorage();
            $translateProvider.translations('en', {
                // 'eng':'eng'
                'svet-recommends': 'Endorsed by Svet',
                'featured': 'featured',
                'your-comment': 'Your Comment',
                'this-week': 'This Week',
                'this-week-news': 'This Week News',
                'image-source-website': 'Open Image Source Website',
                'recommended': 'Recommended',
                'society': 'Society',
                'digest': 'Digest',
                'useful-tips': 'Useful Tips',
                'history': 'History',
                'life-styles': 'Lifestyles',
                'only-on-svet': 'Only on Svet',
                'personality': 'Personality',
                'gargantua-recipes': 'Gargantua Recipes',
                'opinion': 'Opinion',
                'popular': 'Popular',
                'new-article': 'New Article',
                'new-blog-post': 'New Blog Post',
                'news-articles': 'News Articles',
                'add-article': 'Add Article',
                'add-news-article': 'Add News Article',
                'add-blog-post': 'Add Blog Post',
                'save-blog': 'Save Post ',
                'svet-blog': 'Svet Blog',
                'blog': 'Blog',
                'add-blog': 'Add Blog Post',
                'save-to-drafts': 'Save to Drafts',
                'save-to-public': 'Save to Public',
                'save-article': 'Save Article',
                'post-article': 'Post Article',
                'back-to-my-articles': 'Back to My Articles',
                'back-to-my-blogs': 'Back to My Blogs',
                'article-author': 'Article Author',
                'article-title': 'Article Title',
                'article-topic': 'Custom Article Topic',
                'article-summary': 'Article Summary',
                'article-section': 'Article Section',
                'date': 'Date',
                'news-section': 'News Section',
                'article-content': 'Article Content',
                'choose-section': 'Choose Section',
                'choose-file': 'Choose txt file',
                'upload-img': 'Upload Image from Your PC',
                'photo-source': 'Photo Source',
                'tags': 'Tags',
                'views': 'Views',
                'shares': 'Shares',
                'private': 'Private',
                'articles-ranking': 'Home Rank',
                'public': 'Public',
                // =images
                'image-format': 'You can upload images in JPG, JPEG, PNG format.',
                'image-max-size': 'Maximum image size: 3MB',
                'image-min-dimensions': 'Minimum image dimensions: 180x150px',
                'image-width': 'Minimum image width is 320px',
                'image-height': 'Minimum image height is 240px',
                'image-terms-conditions': 'I accept uploading and using photo and images terms and conditions'

                // 'eng':'eng',
            });
            $translateProvider.translations('ru', {
                // 'ru':'ru'
                'svet-recommends': 'Свет Рекомендует',
                'recommended': 'Рекомендуемое',
                'featured': 'Похожее',
                'your-comment': 'Ваш Комментарий',
                'this-week': 'На етой неделе',
                'this-week-news': 'Новости недели',
                'image-source-website': 'Открыть Ресурс Изображения',
                'only-on-svet': 'Эксклюзив',
                'history': 'История',
                'life-styles': 'Стиль Жизни',
                'personality': 'Персона',
                'digest': 'Кратко',
                'society': 'Общество',
                'useful-tips': 'Полезные Советы',
                'gargantua-recipes': 'Уголок Гаргантюа',
                'opinion': 'Мнение',
                'popular': 'Популярное',
                'new-article': 'Новая Статья',
                'new-blog-post': 'Новый блог пост',
                'news-articles': 'Новости',
                'blog': 'Блог',
                'svet-blog': 'Svet Блог',
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
                'back-to-my-blogs': 'Вернуться к моим блогам',
                'article-author': 'Автор статьи',
                'article-title': 'Заголовок статьи',
                'article-topic': 'Вольная Тема Статьи',
                'article-summary': 'Содержание одним предложением',
                'article-section': 'Раздел Новостей',
                'date': 'Дата',
                'articles-ranking': 'Ранг Новостей',
                'article-content': 'Содержание статьи',
                'choose-section': 'Выберите Тему',
                'choose-file': 'Выберите ТХТ файл',
                'news-section': 'Раздел Новостей',
                'upload-img': 'Загрузить фотографию',
                'photo-source': 'Ресурс фотографии',
                'tags': 'Теги',
                'shares': 'Поделились',
                'views': 'Просмотры',
                'likes': 'Понравилось',
                'private': 'Приватная',
                'public': 'Публичная',
                // =images
                'image-format': 'Допустимые форматы для фото: JPG, JPEG, PNG',
                'image-max-size': 'Максимальный размер фото: 3 Мб',
                'image-min-dimensions': 'Изображение должно быть не менее 180x150 пикселей',
                'image-width': 'Мимимальная ширина фото 320px',
                'image-height': 'Мимимальная высота фото 240px',
                'image-terms-conditions': 'Я принимаю Соглашение о передаче фото- и видеоматериалов'

                // 'ru':'ru',
            });
            $translateProvider.preferredLanguage('en');
        }]);
})();
