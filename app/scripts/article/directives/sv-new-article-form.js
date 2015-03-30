(function () {
    'use strict';

    angular.module('article')
        .directive('svNewArticleForm', function ($rootScope) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-new-article-form.html',
                scope: {},
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    ctrl.siteSections = [
                        'Политика',
                        'Мы и Деньги',
                        'Культура',
                        'Общество',
                        'Мир',

                    ]
                    ctrl.dateMod = '';

                    ctrl.article = {
                        author: $rootScope.user.fname + ' ' + $rootScope.user.lname,
                        date: '',
                        section: '',
                        title: '',
                        body: '',
                        tags: ''

                    }
                    ctrl.setSection = function (section) {
                        ctrl.article.section = section;
                    }

                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
