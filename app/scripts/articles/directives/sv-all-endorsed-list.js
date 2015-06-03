(function () {
    'use strict';

    angular.module('articles')
        .directive('svAllEndorsedList', function () {
            return {
                replace: true,
                templateUrl: 'scripts/articles/directives/sv-all-endorsed-list.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
