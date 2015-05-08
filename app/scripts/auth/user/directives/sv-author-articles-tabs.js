(function () {
    'use strict';
    angular.module('auth')
        .directive('svAuthorArticlesTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-author-articles-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    var tabs = [],
                        selected = null,
                        previous = null;
                    $scope.tabs = tabs;
                    $scope.selectedIndex = 0;
                    $scope.$watch('selectedIndex', function (current, old) {
                        previous = selected;
                        selected = tabs[current];
                    });
                }
            };
        });
})();
