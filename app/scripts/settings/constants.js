(function () {
	'use strict'

	angular.module('app')

		.constant('url', 'https://svet.firebaseio.com/')
		.constant('users', 'https://svet.firebaseio.com/user-management/users/')
		.service('urlUsers', function (url) {
			this.url = url + '/user-management/users/';
		})
		.value('weather', 'https://publicdata-weather.firebaseio.com/chicago');

})();
