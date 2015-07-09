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
                link: function ($scope, el, attrs) {
                    $scope.closeSideBar = function () {
                        $mdSidenav('left').close();
                        $mdSidenav('right').close();
                    };
                }
            };
        });
})();
