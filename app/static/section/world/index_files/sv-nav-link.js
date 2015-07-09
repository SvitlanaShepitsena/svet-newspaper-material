(function () {
    'use strict';
    angular.module('common')
        .directive('svNavLink', function ($mdSidenav) {
            return {
                replace: true,
                templateUrl: '/scripts/common/directives/sv-nav-link.html',
                scope: {
                    url: '@',
                    stitle: '@',
                    side: '@',
                    icon: '@',
                    someObject: '=',
                    someString: '@',
                    someExpr: '&'
                },
                link: function ($scope, el, attrs) {
                    $scope.closeSideBar = function () {
                        $mdSidenav('left').close();
                        $mdSidenav('right').close();
                    };
                }
            };
        });
})();
