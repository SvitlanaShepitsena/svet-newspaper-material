(function () {
    'use strict';

    angular.module('article')
        .directive('svComments', function ($rootScope) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-comments.html',
                scope: {
                    comments: '=',
                    key:'='
                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
