(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svOneClassifiedThumb', function (TimeLeftServ, ClassifiedServ, $mdDialog, toastr, $state, $timeout, $animate, userAuth, $translate, viewModalConst) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-one-classified-thumb.html',
                scope: {
                    isNew: '=',
                    cl: '=',
                    removeCl: '&',
                    banCl: '&',
                    editCl: '&',
                    widget: '=',
                    isHome: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.$watch('cl', function (newValue, oldValue) {
                        if (newValue) {
                            $timeout(function () {
                                $scope.currentCl = newValue;
                                var timeObj = TimeLeftServ.computeInDays(newValue.timestamp, 7);
                                $scope.status = timeObj.isActive;
                                $scope.timeLeft = timeObj.timeLeft;
                                $scope.isNewCurr = $scope.isNew;
                            }, 400);
                        }
                    }, true);
                    $scope.banByManager = function (cl) {
                        //toastr.info('ban ban skit!'+cl.$id)
                        ClassifiedServ.banCl(cl).then(function () {
                            toastr.warning('Classified is banned');
                        });
                    };
                    $scope.user = userAuth.profile;
                    $scope.editState = false;
                    $scope.isEditable = function () {
                        if ($scope.isHome) {
                            return false;
                        }
                        if ($state.current.name.indexOf('classified') > -1 && $state.current.name.indexOf('user') === -1) {
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
                        viewModalConst.widget = $scope.widget;
                        $mdDialog.show(
                            {
                                controller: ClassifiedModalController,
                                templateUrl: 'scripts/ad/classified/views/modalClassified.html',
                            }
                        );
                    };
                    function ClassifiedModalController($scope, $mdDialog, viewModalConst, $state) {
                        $scope.cl = viewModalConst.cl;
                        $scope.widget = viewModalConst.widget;
                        $scope.goToSectionList = function () {
                            var routeName = 'app.classified.' + $scope.cl.section;
                            $state.go(routeName);
                            $scope.hide();
                        };
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
