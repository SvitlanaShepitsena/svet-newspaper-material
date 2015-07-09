(function () {
    'use strict';
    angular.module('common')
        .factory('HtmlParseServ', function ($q, $http, $sanitize,$sce) {
            var startChar = '<div class="article_txt_intro">';
            var endChar = '<p id="ctl00_ctl00';

            function parseContent(article) {
                var el = $('<div></div>');
                el.html(article);
                var parags = _.take($('.zoomMe', el).find('p'), 7);
                var content = '';
                for (var i = 0; i < parags.length; i++) {
                    var p = parags[i];
                    var parsedHtml;
                    try {
                        parsedHtml = $sanitize(p.outerHTML);
                        if (!!~parsedHtml.indexOf('background-color')) {
                            continue;
                        }
                        parsedHtml.replace(/\&\#34;/g,'"');
                    } catch (e) {
                        console.log(e);
                        continue;
                    }
                    if (i === 1) {
                        content += '<br/>';
                    }
                    content += parsedHtml;
                }
                var tags = $('.topintend', el).text().replace('Метки:', '').trim();
                return {body: content.trim(), tags: tags}
            }

            return {
                getFullNews: function (url) {
                    return $q(function (resolve, reject) {
                        var htmlPage = $http.get(url).then(function (article) {
                            var content = parseContent(article.data);
                            resolve(content);
                        });
                    });
                },
                getMultipleFullNews: function (news) {
                    var that = this;
                    var urls = _.pluck(news, 'link');
                    var promises = [];
                    urls.forEach(function (url) {
                        promises.push(that.getFullNews(url));
                    });
                    return $q.all(promises);
                }
            };
        });
})
();
