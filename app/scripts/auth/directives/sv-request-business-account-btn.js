(function () {
	'use strict';

	angular.module('auth')
		.directive('svRequestBusinessAccountBtn', function (RequestServ, $rootScope,toastr) {
			return {
				replace: true,
				templateUrl: 'scripts/auth/directives/sv-request-business-account-btn.html',
				scope: {},
				link: function ($scope, el, attrs) {

					RequestServ.getStatus($rootScope.user.id).then(function (requestSubmited) {
						$scope.loaded = true;
						$scope.requestSubmited = requestSubmited;
					});

					$scope.cancelRequest = function () {
						RequestServ.cancelRequest($rootScope.user.id).then(function () {
						$scope.requestSubmited = false;
							toastr.warning('Your request for Svet Media Group  corporate account has been canceled');
						});

					};
					$scope.submitRequest = function () {

						RequestServ.submitRequest($rootScope.user.id).then(function () {
							$scope.requestSubmited = true;
							toastr.success('Your request for Svet Media Group  corporate account has been successfully submitted');
						}, function (error) {
							toastr.error(error);
						});
					};
				}
			};
		});
})();
