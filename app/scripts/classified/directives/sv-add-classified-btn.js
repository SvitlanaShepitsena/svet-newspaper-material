(function () {
    'use strict';

    angular.module('classified')
        .directive('svAddClassifiedBtn', function (ClassifiedServ) {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-add-classified-btn.html',
                scope: {
                    cls: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.startCl = function () {
                        if (!ClassifiedServ.isClAvaliable($scope.classifieds.length)) {
                            $scope.notAllowed = true;
                        }
                    };

                }
            };
        });
})();
