(function () {
    'use strict';
    angular.module('ad.classified')
        .controller('ClassifiedCtrl', function ($scope, classified, $rootScope, $state, $stateParams) {
            $scope.allCls = classified.list;
            $scope.$watch('allCls', function (newValue, oldValue) {
                if (newValue) {
                    $scope.allCls = _.filter(newValue, function (cl) {
                        return !cl.banned;
                    });
                }
            }, true);
            $scope.svRoute = $state.params.clSection || _.last($state.current.name.split('.'));
            $rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    if (!toParams.clSection) {
                        $scope.svRoute = _.last(toState.name.split('.'));
                    } else {
                        $scope.svRoute = toParams.clSection;
                    }
                    console.log($scope.svRoute);
                })
        });
})();

