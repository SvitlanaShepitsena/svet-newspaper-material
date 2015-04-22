(function () {
    'use strict';

    angular.module('auth')
        .directive('svUserSocialTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-user-social-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    var tabs = [
                            {title: 'friends', content: "My Friends "},
                            {title: 'community', content: "Find People"}
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
