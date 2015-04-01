(function () {
    'use strict';

    angular.module('classified')
        .directive('svClassifiedTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-classified-tabs.html',
                scope: {},
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope, $log) {
                    var ctrl = this;

                    var classified = this;
                    var tabs = [
                            {title: 'Община', content: "Here are classified for community"},
                            {title: 'Работа', content: "Here are classified for jobs"},
                            {title: 'Продажа', content: "Here are classified for sale."},
                            {title: 'Услуги', content: "Here are classified for services"},
                            {title: 'Авто', content: "Here are classified for cars"},
                            {title: 'Недвижимость', content: "Here are classified for housing"},
                            {title: 'Знакомства', content: "Here are classified for personal"}
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
