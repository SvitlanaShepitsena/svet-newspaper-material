(function () {
    'use strict';
    angular.module('article')
        .factory('SvHtmlValidatorServ', function ($q, $sanitize, url, users, $firebaseObject, $firebaseArray,$sce) {
            return {
                validate: function (html) {
                    var isValid = false;
                    try {
                        var parsedHtml = $sanitize(html);
                        isValid = true;
                    } catch (e) { }
                    return isValid;
                },
                cleanArticle: function (article) {
                    _.forOwn(article, function (value,key) {
                        if (_.isString(value)) {
                            article[key]=$sanitize(value);
                        }
                    })
                    return article;
                },
            };
        });
})();
