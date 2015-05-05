(function () {
    'use strict';
    angular.module('auth')
        .directive('svAuthorArticlesTabs', function () {
            return {
                replace: true,
                templateUrl: 'sv-author-articles-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    var tabs = [
                            {title: 'world', content: "Here will be my politics articles "},
                            {title: 'politics', content: "Here will be my politics articles "},
                            {title: 'business', content: "Money"},
                            {title: 'technology', content: "About Culture."},
                            {title: 'culture', content: "About Culture."},
                            {title: 'sport', content: "About Culture."},
                            {title: 'health', content: "About Culture."},
                            {title: 'food', content: "Articles about society"},
                            {title: 'travel', content: "World"}
                        ],
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
