(function () {
    'use strict';

    angular.module('common')
        .factory('HtmlParseServ', function ($q, $http, $sanitize) {

            var startChar = '<div class="article_txt_intro">';
            var endChar = '<p id="ctl00_ctl00';

            function parseContent(article) {
                var el = $('<div></div>');
                el.html(article);

                var text = $('.zoomMe', el).text();
                var tags = $('.topintend', el).text().replace('Метки:','').trim();

                return {body:text,tags:tags}

            }

            return {

                getFullNews: function (url) {
                    return $q(function (resolve, reject) {

                        var htmlPage = $http.get(url).then(function (article) {
                            var content = parseContent(article.data);
                            resolve(content);
                        });
                    });
                }
            };
        });
})
();
