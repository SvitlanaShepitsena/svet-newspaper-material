(function () {
    'use strict';
    angular.module('auth.manager')
        .directive('svAfishaEventsTabs', function (svetEventsConst) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/manager/directives/sv-afisha-events-tabs.html',
                link: function ($scope, el, attrs) {
                    var tabs = [],
                        selected = null,
                        previous = null;
                    $scope.tabs = tabs;
                    $scope.selectedIndex = 0;
                    $scope.$watch('selectedIndex', function (current, old) {
                        previous = selected;
                        selected = tabs[current];
                    });
                    //$scope.$watchCollection(function () {
                    //    return svetEventsConst.evts;
                    //}, function (newValue, oldValue) {
                    //    if (newValue !== oldValue) {
                    //        $scope.evtsReady = true;
                    //        console.log(newValue[0]);
                    //    }
                    //});
                }
            };
        });
})();
