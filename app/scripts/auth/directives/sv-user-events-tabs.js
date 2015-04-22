(function () {
    'use strict';

    angular.module('auth')
        .directive('svUserEventsTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-user-events-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    var tabs = [
                            {title: 'planned-events', content: "Planned Events "},
                            {title: 'visited-events', content: "Visited Events "},
                            {title: 'invitations', content: "Invitations"}
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
