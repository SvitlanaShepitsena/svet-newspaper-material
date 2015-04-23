(function () {
	'use strict';

	angular.module('auth')
		.factory('RequestServ', function ($q, users, $firebaseObject) {
			return {
				getStatus: function (userId) {
					return $q(function (resolve, reject) {

						var userUrl = users + userId;
						var userObj = $firebaseObject(new Firebase(userUrl));

						userObj.$loaded().then(function () {
							if (userObj.requestCorporateSubmited) {
								resolve(true);
							} else {
								resolve(false)
							}
						}).catch(function (error) {
							console.log(userid + 'does not exists');
							reject(error);
						});

					});
				},
				submitRequest: function (userId) {
					return $q(function (resolve, reject) {

						var userUrl = users + userId;
						var userObj = $firebaseObject(new Firebase(userUrl));

						userObj.$loaded().then(function () {
							userObj.requestCorporateSubmited = true;

							userObj.$save().then(function (success) {
								resolve(success);
							})
						}).catch(function (error) {
							console.log(userid + 'does not exists');
							reject(error);
						});

					});
				},
				cancelRequest: function (userId) {
					return $q(function (resolve, reject) {

						var userUrl = users + userId;
						var userObj = $firebaseObject(new Firebase(userUrl));

						userObj.$loaded().then(function () {
							userObj.requestCorporateSubmited = false;
							userObj.$save().then(function (success) {
								resolve(success);
							})
						}).catch(function (error) {
							console.log(userid + 'does not exists');
							reject(error);
						});

					});
				}
			};
		});
})();
