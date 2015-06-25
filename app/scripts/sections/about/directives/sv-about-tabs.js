(function () {
    'use strict';

    angular.module('sections.about')
        .directive('svAboutTabs', function ($mdDialog, $state) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/about/directives/sv-about-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    var currentState = $state.current.name;

                    if (currentState && _.contains(currentState, 'demographics')) {
                        $scope.selectedIndex = 1;
                    }

                }
            };
        });
})();
