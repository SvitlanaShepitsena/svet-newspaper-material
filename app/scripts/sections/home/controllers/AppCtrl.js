(function () {
    'use strict';
    angular.module('sections.home')
        .controller('AppCtrl', function AppCtrl(AgentServ, NotificationsServ, userAuth, $timeout, $mdSidenav, $mdMedia,
                                                NewsProcessServ, ArticleServ, $state, $scope, $rootScope, toastr) {
            $scope.user = userAuth;
            $scope.$watch('user', function (newValue, oldValue) {
                console.log(newValue);
            });
            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                toastr.warning(error);
            })
            $rootScope.$on('error', function () {
                toastr.error('error');
            });
            /*Managing Angular Material Sidenavs Structure*/
            $scope.isIe = AgentServ.isIe();
            $scope.toggleLeft = function () {
                $mdSidenav('left').toggle();
            };
            $scope.toggleRight = function () {
                $mdSidenav('right').toggle();
            };
            $rootScope.$watch('appLoaded', function (newValue) {
                $scope.appLoaded = newValue;
            });
            $scope.$watch(function () {
                return $mdMedia('gt-lg');
            }, function (rightPanelShown) {
                if (rightPanelShown) {
                    $scope.showShifter = !AgentServ.isIe();
                } else {
                    $scope.showShifter = true;
                }
            });
        });
})();

