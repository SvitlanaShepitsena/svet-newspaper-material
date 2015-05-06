(function () {
    'use strict';
    angular.module('common')
        .directive('svNavLink', function ($rootScope, $mdSidenav) {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-nav-link.html',
                scope: {
                    url: '@',
                    title: '@',
                    side: '@',
                    icon: '@'
                },
                bindToController: {
                    someObject: '=',
                    someString: '@',
                    someExpr: '&'
                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    ctrl.closeSideBar = function () {
                        $mdSidenav('left').close();v$y
                        $mdSidenav('right').close();
                    };
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
