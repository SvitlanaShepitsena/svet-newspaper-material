(function () {
    'use strict';

    angular.module('auth')
        .directive('svAuthorArticlesTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-author-articles-tabs.html',
                scope: {},
                bindToController: {

                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    var tabs = [
                            {title: 'Политика', content: "Here will be my politics articles "},
                            {title: 'Мы и Деньги', content: "Money"},
                            {title: 'Культура', content: "About Culture."},
                            {title: 'Общество', content: "Articles about society"},
                            {title: 'Мир', content: "World"}
                        ],
                        selected = null,
                        previous = null;
                    $scope.tabs = tabs;
                    $scope.selectedIndex = 0;
                    $scope.$watch('selectedIndex', function (current, old) {
                        previous = selected;
                        selected = tabs[current];
                    });

                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
