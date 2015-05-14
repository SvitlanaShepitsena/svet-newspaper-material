(function () {
    'use strict';
    angular.module('sections.home')
        .controller('AppCtrl', function AppCtrl(AgentServ, $mdSidenav, $mdMedia, NewsProcessServ, ArticleServ, $state, $scope, user, $rootScope, toastr) {
            $scope.toggleLeft = function () {
                $mdSidenav('left').toggle();
            };
            $scope.toggleRight = function () {
                $mdSidenav('right').toggle();
            };
            $rootScope.$watch('appLoaded', function (newValue) {
                $scope.appLoaded = newValue;
            });
            $scope.isIe = AgentServ.isIe();
            $scope.$watch(function () {
                return $mdMedia('gt-lg');
            }, function (rightPanelShown) {
                if (rightPanelShown) {
                    $scope.showShifter = !AgentServ.isIe();
                } else {
                    $scope.showShifter = true;
                }
            });
            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                toastr.warning(error);
            })
            $rootScope.$on('error', function () {
                toastr.error('error');
            });
        })
        .controller('LeftCtrl', function ($scope) {
            $scope.close = function () {
                $mdSidenav('left').close();
            };
        })
        .controller('RightCtrl', function ($scope) {
            $scope.close = function () {
                $mdSidenav('right').close();
            };
        });
})();

