(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svClassifiedTabs', function ($state) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-classified-tabs.html',
                link: function ($scope, el, attrs) {
                    $scope.svTabs = ['community', 'job', 'lessons', 'housing', 'sale', 'services', 'personal', 'cars',];
                    $scope.$watch('svRoute', function (newValue, oldValue) {
                        if (!newValue) {
                            return;
                        }
                        $scope.selectedIndex = $scope.svTabs.indexOf(newValue.toLowerCase());
                    });

                }
            };
        });
})();
