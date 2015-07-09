(function () {
    'use strict';
    angular.module('common')
        .directive('svNavBtn', function ($rootScope, $mdSidenav) {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-nav-btn.html',
                scope: {
                    url: '@',
                    title: '@',
                    customClass: '@',
                    iconType: '@',
                    color: '@',
                    btnStyle: '@',
                    btnSize: '@',
                    bgc: '@',
                    txtColor: '@',
                    customStyle: '@',
                    icon: '@'
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
