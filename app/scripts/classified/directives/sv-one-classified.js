(function () {
    'use strict';

    angular.module('classified')
        .directive('svOneClassified', function (ClassifiedServ, $stateParams) {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-one-classified.html',
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
