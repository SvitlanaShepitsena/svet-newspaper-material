(function () {
    'use strict';

    angular.module('article')
        .directive('svManageArticleNav', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-manage-article-nav.html',
                scope: {},
                bindToController: {
                    article: '=',
                    datepicker: '='
                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    ctrl.saveArticle = function () {
                        ctrl.article.date = ctrl.datepicker.date;
                        console.log(ctrl.article);
                    }
                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
