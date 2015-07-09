(function () {
    'use strict';
    angular.module('sections.home')
        .controller('AppCtrl', function AppCtrl(AgentServ, NotificationsServ, userAuth, $timeout, $mdSidenav, $mdMedia,
                                                NewsProcessServ, $state, $scope, $rootScope, toastr, SOCIAL_PLUGINS) {
            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                toastr.warning(error);
            });
            $rootScope.$on('error', function () {
                toastr.error('error');
            });
            $scope.$on('image-search-show', function () {
                $scope.imageSearch = true;
            });
            $scope.$on('image-search-hide', function () {
                $scope.imageSearch = false;
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

