(function () {
	'use strict';

	angular.module('app')

		.controller('MainCtrl', function (AgentServ, $scope, $timeout, $mdSidenav, $mdMedia, $rootScope) {

			var main = this;
			main.isIe = AgentServ.isIe();

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
					main.showShifter = !AgentServ.isIe();
				} else {
					main.showShifter = true;
				}
			});
		})
		.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
			$scope.close = function () {
				$mdSidenav('left').close();
			};
		})
		.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
			$scope.close = function () {
				$mdSidenav('right').close();
			};
		});

})();