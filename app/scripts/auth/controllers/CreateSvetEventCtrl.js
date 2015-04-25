(function () {
	'use strict';

	angular.module('auth')
		.controller('CreateSvetEventCtrl', function ($scope) {

			$scope.event = {
				type: 'public'
			};
            $scope.createEvent = function (event) {
                console.log(event);
            };




		});
})
();

