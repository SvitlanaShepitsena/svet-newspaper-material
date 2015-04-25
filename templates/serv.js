(function () {
	'use strict';

	angular.module('#module#')
		.factory('#name#Serv', function ($q, url, urlUsers, $firebaseObject, $firebaseArray) {

			return {

				get: function () {
					return $q(function (resolve, reject) {

					});
				}
			};
		});
})();
