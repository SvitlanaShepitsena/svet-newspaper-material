(function () {
    'use strict';

    angular.module('classified')
        .directive('svUserClassified', function (CurrentUserServ,ClassifiedServ) {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-user-classified.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                    $scope.user = CurrentUserServ.get();
                    var cls = ClassifiedServ.getUserClassifiesArr($scope.user.id);

                    cls.$loaded().then(function () {
                        $scope.cls = cls;
                        cls.$watch(function () {
                            $scope.cls = cls;
                        })

                    })

                }
            };
        });
})();
