(function () {
    'use strict';
    angular.module('sections.archive')
        .directive('svNavPdfThumb', function ($rootScope, $mdSidenav) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/archive/directives/sv-nav-pdf-thumb.html',
                scope: {
                    url: '@',
                    img: '@'
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
