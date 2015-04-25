(function () {
    'use strict';

    angular.module('ad')
        .factory('AdServ', function ($q, url,$firebaseArray) {
            return {

                get: function () {
	                var adUrl = url+'ad'
                    return $q(function (resolve, reject) {
	                    var adArray = $firebaseArray(new Firebase(adUrl));
	                    adArray.$loaded().then(function () {
		                    resolve(adArray);
	                    })

                    });
                }
            };
        });
})();
