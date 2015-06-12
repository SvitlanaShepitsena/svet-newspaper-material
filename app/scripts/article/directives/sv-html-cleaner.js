(function () {
    'use strict';

    angular.module('article')
        .directive('svHtmlCleaner', function () {
            return {
                link: function ($scope, el, attrs) {
                    $scope.$watch('article.body', function (newValue, oldValue) {
                        if (newValue === oldValue) return;

                        console.log(newValue);
                    });

                }
            };
        });
})();
