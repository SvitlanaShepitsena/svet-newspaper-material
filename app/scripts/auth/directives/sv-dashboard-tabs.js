(function () {
    'use strict';

    angular.module('auth')
        .directive('svDashboardTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-dashboard-tabs.html',
                scope: {},
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    var tabs = [
                            {title: 'Статистика', content: "Here is going to be my profile statistics"},
                            {title: 'Комментарии', content: "Here are my discussions"},
                            {title: 'Закладки', content: "Here are some interesting articles saved."}
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
