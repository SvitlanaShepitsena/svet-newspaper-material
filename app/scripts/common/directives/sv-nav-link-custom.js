(function () {
    'use strict';

    angular.module('common')
        .directive('svNavLinkCustom', function ($mdSidenav) {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-nav-link-custom.html',
                scope: {
                    url: '@',
                    iconWidth: '@',
                    iconLink: '@',
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
