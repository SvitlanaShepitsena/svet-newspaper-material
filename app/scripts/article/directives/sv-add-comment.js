(function () {
    'use strict';
    angular.module('article')
        .directive('svAddComment', function (CurrentUserServ, ArticleServ) {
            return {
                replace: true,
                templateUrl: 'sv-add-comment.html',
                scope: {},
                bindToController: {
                    key: '='
                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    ctrl.user = CurrentUserServ.get();
                    ctrl.comment = {
                        body: '',
                        user: ctrl.user.fname || ctrl.user.login,
                        avatar: ctrl.user.avatar || ''
                    }
                    $rootScope.$watch('user', function (newsObj) {
                        ctrl.user = newsObj;
                    });
                    ctrl.submitComment = function () {
                        ArticleServ.addComment(ctrl.key, ctrl.comment);
                    };
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
