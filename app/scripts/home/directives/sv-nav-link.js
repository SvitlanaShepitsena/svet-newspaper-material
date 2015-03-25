(function () {
    'use strict';

    angular.module('home')
        .directive('svNavLink', function ($rootScope) {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-nav-link.html',
                scope: {
                    url: '@',
                    title: '@',
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

                },

                link: function ($scope, el, attrs) {
                    $scope.closeSideBar = function () {
                        $rootScope.$broadcast('close:SideBars');
                    };

                }
            };
        });
})();
