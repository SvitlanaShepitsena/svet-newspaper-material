(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svOneClassifiedThumb', function (ClassifiedServ, toastr, $state, $timeout, $animate, userAuth) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-one-classified-thumb.html',
                scope: {
                    cl: '=',
                    removeCl: '&',
                    editCl: '&',
                    widget: '=',
                    isHome: '='
                },
                link: function ($scope, el, attrs) {
                    var stateCur=$state.current;
                    console.log(stateCur);


                    $scope.user = userAuth.profile;
                    $scope.editState = false;
                    $scope.isEditable = function () {
                        if ($scope.isHome) {
                            return false;
                        }
                        if ($state.$current.name.indexOf('classified') > -1) {
                            return false;
                        }
                        if (!userAuth.profile) {
                            return false;
                        }
                        if (userAuth.key === $scope.cl.userKey) {
                            return true;
                        }
                    };
                }
            };
        });
})();
