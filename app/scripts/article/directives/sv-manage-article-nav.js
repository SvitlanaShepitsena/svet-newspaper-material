(function () {
    'use strict';

    angular.module('article')
        .directive('svManageArticleNav', function (ArticleServ,toastr){
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-manage-article-nav.html',
                scope: {},
                bindToController: {
                    article: '='
                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    ctrl.saveArticle = function () {
                        ArticleServ.add(ctrl.article).then(function (uid) {
                                toastr.success('Статья сохранена в БД');
                            },
                            function (error) {
                                console.log(error);
                            }
                        );
                    }
                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
