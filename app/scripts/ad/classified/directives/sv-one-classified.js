(function () {
    'use strict';

    angular.module('ad.classified')
        .directive('svOneClassified', function (ClassifiedServ, $stateParams) {
            return {
                replace: true,
                templateUrl: '..//directives/sv-one-classified.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                    var clIndex = $stateParams.clid;
                    var clObject = ClassifiedServ.getClByKey(clIndex);

                    clObject.$bindTo($scope,'cl').then(function () {
                        $scope.loaded = true;
                    });
                }
            };
        });
})();
