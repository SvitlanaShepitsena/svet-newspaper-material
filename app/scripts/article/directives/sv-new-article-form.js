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
                    ctrl.article = {
                        author: $rootScope.user.fname + ' ' + $rootScope.user.lname,
                        date: 'datepicker.date',
                        section: '',
                        title: '',
                        body: '',
                        tags: ''

                    }

                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
