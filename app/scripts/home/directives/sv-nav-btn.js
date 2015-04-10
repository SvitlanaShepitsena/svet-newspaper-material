(function () {
    'use strict';

    angular.module('home')
        .directive('svNavBtn', function ($rootScope, $mdSidenav) {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-nav-btn.html',
                scope: {
                    url: '@',
                    title: '@',
                    customClass: '@',
                    color: '@',
                    btnStyle: '@',
                    btnSize: '@',
                    bgc: '@',
                    txtColor: '@',
                    icon: '@'
                },
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    ctrl.closeSideBar = function () {
                        $mdSidenav('left').close();
                        $mdSidenav('right').close();
                    };

                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
