(function () {
    'use strict';
    angular.module('ad.classified')
        .config(function ($translateProvider) {
            $translateProvider.directivePriority(10);
        })
        .directive('svOneClassifiedThumb', function (TimeLeftServ, ClassifiedServ, $mdDialog, toastr, $state, $timeout, $animate, userAuth, $translate, viewModalConst) {
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
                    $scope.timeLeft = moment($scope.cl.timestamp).add('7','day');

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
                    $scope.showClassifiedModal = function (clickedCl) {
                        viewModalConst.cl = clickedCl;

                        $mdDialog.show(
                            {
                                controller: ClassifiedModalController,
                                templateUrl: 'scripts/ad/classified/views/modalClassified.html',
                            }
                        );
                    };
                    function ClassifiedModalController($scope, $mdDialog, viewModalConst) {
                        $scope.cl = viewModalConst.cl;
                        $scope.hide = function () {
                            $mdDialog.hide();
                        };
                        $scope.cancel = function () {
                            $mdDialog.cancel();
                        };
                        $scope.answer = function (answer) {
                            $mdDialog.hide(answer);
                        };
                    }
                }
            };
        });
})();
