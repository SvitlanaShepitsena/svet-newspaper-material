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
                    var classified = this;
                    var tabs = [
                            {title: 'Политика', content: "Here are classified for community"},
                            {title: 'Мы и Деньги', content: "Here are classified for jobs"},
                            {title: 'Культура', content: "Here are classified for sale."},
                            {title: 'Общество', content: "Here are classified for services"},
                            {title: 'Мир', content: "Here are classified for cars"}
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
