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
                            {title: 'community', content: "Here are classified for community"},
                            {title: 'job', content: "Here are classified for jobs"},
                            {title: 'lessons', content: "Here are classified for private lessons"},
                            {title: 'sell', content: "Here are classified for sale."},
                            {title: 'services', content: "Here are classified for services"},
                            {title: 'cars', content: "Here are classified for cars"},
                            {title: 'housing', content: "Here are classified for housing"},
                            {title: 'personal', content: "Here are classified for personal"}
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
