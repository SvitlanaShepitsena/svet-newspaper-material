(function () {
    'use strict';
    angular.module('auth.user')
        .directive('svUserSocialTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-user-social-tabs.html',
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
