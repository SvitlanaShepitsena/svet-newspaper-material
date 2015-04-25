(function () {
	'use strict';

	angular.module('auth')
		.controller('CreateSvetEventCtrl', function ($scope) {
			$scope.event = {
				title: '',
				type: 'public',
				address:'',
				date:'',
				admission:''
		};

});
})
();

