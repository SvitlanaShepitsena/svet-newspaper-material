(function () {
    'use strict';
    angular.module('ad.classified')
        .config(function ($translateProvider) {
            $translateProvider.directivePriority(10);
        })
        .directive('svOneClassifiedThumb', function (ClassifiedServ, toastr, $state, $timeout, $animate, userAuth, $translate, viewModalConst) {
            return {
                priority: 10,
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
                    $scope.$watch('cl', function (newValue) {
                        if (!newValue) {
                            return;
                        }
                        viewModalConst.cl = $scope.cl;
                    });
                    $translate.directivePriority(10);
                    $translate('delete').then(function (translation) {
                        $scope.deleteTitle = translation;
                    });
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
