(function () {
	'use strict';

	angular.module('auth')
		.factory('NoteServ', function ($q, url, urlUsers, $firebaseObject, $firebaseArray) {

			return {

				get: function () {
					return $q(function (resolve, reject) {

					});
				}
			};
		});
})();
